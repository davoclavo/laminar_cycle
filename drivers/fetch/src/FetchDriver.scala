package cycle

import com.raquo.laminar.api.L._
import org.scalajs.dom.experimental._

object fetch {

  final case class Request(input: RequestInfo, init: RequestInit = null)

  type Devices = CIO[(Request, Response), Request]

  def driver: DriverEl[Devices] = {
    val devices = PIO[Request, (Request, Response)]
    val reqRes = devices.flatMap(req =>
      EventStream.fromFuture {
        Fetch.fetch(req.input, req.init).toFuture
      }.map(req -> _)
    )
    Driver(devices, reqRes --> devices)
  }

}
