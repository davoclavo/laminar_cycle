package cycle

import com.raquo.laminar.api.L._
import com.raquo.laminar.nodes.ReactiveElement
import com.raquo.laminar.nodes.ReactiveElement.Base
import org.scalajs.dom
import zio._
import zio.stream._

object zioDriver {

  type BindEl = Binder[Base]

  class ZCycle[D: Tag] private[ZCycle] {
    type Devices  = D
    type Driver   = cycle.Driver[Devices]
    type Cycle    = cycle.Cycle[Devices]
    type User     = cycle.User[Devices]
    type HasCycle = zio.Has[Cycle]

    def cycleLayer[R, E](driver: Driver): ZLayer[R, E, HasCycle] =
      ZLayer.fromFunction(_ => { user: User => user(driver.devices) })

    def apply[E](user: User): ZIO[HasCycle, E, ModEl] =
      ZIO.access[HasCycle](_.get).map(_.apply(user))
  }

  object ZCycle {
    def apply[Devices: Tag]: ZCycle[Devices] = new ZCycle[Devices]
  }

  implicit class StreamOps[R, E, O](private val stream: ZStream[R, E, O])
      extends AnyVal {

    def zDriveIn: ZIO[R, Nothing, Driver[In[O]]] =
      toEventStream.map(t => Driver(In(t._1), t._2))

    def toEventStream: ZIO[R, Nothing, (EventStream[O], BindEl)] =
      for {
        _ <- ZIO.unit
        bus = new EventBus[O]
        binder <- writeToBus(bus.writer)
      } yield {
        bus.events -> binder
      }

    def writeToBus(
        wb: WriteBus[O]
    ): ZIO[R, Nothing, BindEl] =
      for {
        runtime <- ZIO.runtime[R]
        drain: URIO[R, Fiber.Runtime[E, Unit]] = stream
          .tap(t => UIO(wb.onNext(t)))
          .runDrain
          .tapCause(cause =>
            UIO(dom.console.error("Failed draining stream", cause.prettyPrint))
          )
          .forkDaemon

      } yield Binder(
        ReactiveElement.bindSubscription(_) { ctx =>
          // Needed since in scala.js we cannot .unsafeRun sync.
          var draining: Fiber.Runtime[E, Unit] = null
          runtime.unsafeRunAsync(drain) {
            case Exit.Failure(cause) =>
              dom.console.error("Failed forking drain", cause.prettyPrint)
              throw cause.dieOption.getOrElse(new Exception(cause.prettyPrint))
            case Exit.Success(fiber: Fiber.Runtime[E, Unit]) =>
              draining = fiber
          }
          new Subscription(ctx.owner, cleanup = { () =>
            if (draining != null) runtime.unsafeRunAsync_(draining.interrupt)
          })
        }
      )

  }

  implicit class QueueOps[RA, RB, EA, EB, A, B](
      private val queue: ZQueue[RA, RB, EA, EB, A, B]
  ) extends AnyVal {

    def readFromEventStream(
        eb: EventStream[A]
    ): ZIO[RA, Nothing, BindEl] =
      for {
        runtime <- ZIO.runtime[RA]
      } yield Binder(
        ReactiveElement.bindSubscription(_) { ctx =>
          eb.foreach(t => runtime.unsafeRunAsync_(queue.offer(t)))(ctx.owner)
        }
      )

    def writeToBus(
        wb: WriteBus[B]
    ): ZIO[RB, Nothing, BindEl] =
      for {
        _ <- ZIO.unit
        stream = ZStream.fromQueue(queue)
        binder <- stream.writeToBus(wb)
      } yield binder

    def zDriveCIO: ZIO[RA with RB, Nothing, Driver[InOut[B, A]]] =
      for {
        inDriver  <- zDriveIn
        outDriver <- zDriveOut
      } yield {
        val devices = CIO(inDriver.devices.in, outDriver.devices.out)
        val binders = inDriver.binds ++ outDriver.binds
        Driver(devices, binders: _*)
      }

    def toEventStream: ZIO[RB, Nothing, (EventStream[B], BindEl)] =
      for {
        _ <- ZIO.unit
        bus = new EventBus[B]
        binder <- writeToBus(bus.writer)
      } yield {
        bus.events -> binder
      }

    def zDriveIn: ZIO[RB, Nothing, Driver[In[B]]] =
      toEventStream.map(t => Driver(In(t._1), t._2))

    def toWriteBus: ZIO[RA, Nothing, (WriteBus[A], BindEl)] =
      for {
        _ <- ZIO.unit
        bus = new EventBus[A]
        binder <- readFromEventStream(bus.events)
      } yield {
        bus.writer -> binder
      }

    def zDriveOut: ZIO[RA, Nothing, Driver[Out[A]]] =
      toWriteBus.map(t => Driver(Out(t._1), t._2))
  }

  implicit class EventStreamOps[A](private val eb: EventStream[A])
      extends AnyVal {

    def toZQueue(
        capacity: Int = 16
    ): ZIO[Any, Nothing, (Queue[A], BindEl)] =
      for {
        queue  <- ZQueue.bounded[A](capacity)
        binder <- intoZQueue(queue)
      } yield queue -> binder

    def intoZQueue(queue: Queue[A]): ZIO[Any, Nothing, BindEl] =
      queue.readFromEventStream(eb)

    def toZStream(capacity: Int = 16): ZIO[
      Any,
      Nothing,
      (ZStream[Any, Nothing, A], BindEl)
    ] =
      for {
        queueAndBinder <- toZQueue(capacity)
        (queue, binder) = queueAndBinder
        stream          = ZStream.fromQueueWithShutdown(queue)
      } yield stream -> binder

  }

  implicit class WriteBusOps[A](private val wb: WriteBus[A]) extends AnyVal {
    def toZQueue(capacity: Int = 16) =
      for {
        queue  <- ZQueue.bounded[A](capacity)
        binder <- intoZQueue(queue)
      } yield queue -> binder

    def intoZQueue(queue: Queue[A]): ZIO[Any, Nothing, BindEl] =
      queue.writeToBus(wb)

    def toZStream(capacity: Int = 16): ZIO[
      Any,
      Nothing,
      (ZStream[Any, Nothing, A], BindEl)
    ] =
      for {
        queueAndBinder <- toZQueue(capacity)
        (queue, binder) = queueAndBinder
        stream          = ZStream.fromQueueWithShutdown(queue)
      } yield stream -> binder
  }

}
