(function(){
'use strict';
var $linkingInfo = Object.freeze({
  "assumingES6": false,
  "productionMode": false,
  "linkerVersion": "1.1.0",
  "fileLevelThis": this
});
var $is = (Object.is || (function(x, y) {
  return ((x === y) ? ((x !== 0) || ((1 / x) === (1 / y))) : ((x !== x) && (y !== y)))
}));
var $imul = (Math.imul || (function(a, b) {
  var ah = (a >>> 16);
  var al = (a & 65535);
  var bh = (b >>> 16);
  var bl = (b & 65535);
  return (((al * bl) + ((((ah * bl) + (al * bh)) << 16) >>> 0)) | 0)
}));
var $fround = (Math.fround || (function(v) {
  return (+v)
}));
var $clz32 = (Math.clz32 || (function(i) {
  if ((i === 0)) {
    return 32
  };
  var r = 1;
  if (((i & (-65536)) === 0)) {
    i = (i << 16);
    r = (r + 16)
  };
  if (((i & (-16777216)) === 0)) {
    i = (i << 8);
    r = (r + 8)
  };
  if (((i & (-268435456)) === 0)) {
    i = (i << 4);
    r = (r + 4)
  };
  if (((i & (-1073741824)) === 0)) {
    i = (i << 2);
    r = (r + 2)
  };
  return (r + (i >> 31))
}));
var $privateJSFieldSymbol = (((typeof Symbol) !== "undefined") ? Symbol : (function(description) {
  function rand32() {
    var s = ((Math.random() * 4.294967296E9) | 0).toString(16);
    return ("00000000".substring(s.length) + s)
  }
  return (description + (((rand32() + rand32()) + rand32()) + rand32()))
}));
var $L0;
function $propertyName(obj) {
  for (var prop in obj) {
    return prop
  }
}
function $Char(c) {
  this.c = c
}
$Char.prototype.toString = (function() {
  return String.fromCharCode(this.c)
});
function $throwClassCastException(instance, classFullName) {
  throw $ct_Lorg_scalajs_linker_runtime_UndefinedBehaviorError__jl_Throwable__(new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(), new $c_jl_ClassCastException(((instance + " is not an instance of ") + classFullName)))
}
function $throwArrayCastException(instance, classArrayEncodedName, depth) {
  while ((--depth)) {
    classArrayEncodedName = ("[" + classArrayEncodedName)
  };
  $throwClassCastException(instance, classArrayEncodedName)
}
function $throwArrayIndexOutOfBoundsException(i) {
  throw $ct_Lorg_scalajs_linker_runtime_UndefinedBehaviorError__jl_Throwable__(new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(), new $c_jl_ArrayIndexOutOfBoundsException(((i === null) ? null : ("" + i))))
}
function $noIsInstance(instance) {
  throw new TypeError("Cannot call isInstance() on a Class representing a JS trait/object")
}
function $makeNativeArrayWrapper(arrayClassData, nativeArray) {
  return new arrayClassData.constr(nativeArray)
}
function $newArrayObject(arrayClassData, lengths) {
  return $newArrayObjectInternal(arrayClassData, lengths, 0)
}
function $newArrayObjectInternal(arrayClassData, lengths, lengthIndex) {
  var result = new arrayClassData.constr(lengths[lengthIndex]);
  if ((lengthIndex < (lengths.length - 1))) {
    var subArrayClassData = arrayClassData.componentData;
    var subLengthIndex = (lengthIndex + 1);
    var underlying = result.u;
    for (var i = 0; (i < underlying.length); (i++)) {
      underlying[i] = $newArrayObjectInternal(subArrayClassData, lengths, subLengthIndex)
    }
  };
  return result
}
function $objectGetClass(instance) {
  switch ((typeof instance)) {
    case "string": {
      return $d_T.getClassOf()
    }
    case "number": {
      if ($isInt(instance)) {
        if ((((instance << 24) >> 24) === instance)) {
          return $d_jl_Byte.getClassOf()
        } else if ((((instance << 16) >> 16) === instance)) {
          return $d_jl_Short.getClassOf()
        } else {
          return $d_jl_Integer.getClassOf()
        }
      } else {
        return $d_jl_Float.getClassOf()
      }
    }
    case "boolean": {
      return $d_jl_Boolean.getClassOf()
    }
    case "undefined": {
      return $d_jl_Void.getClassOf()
    }
    default: {
      if ((instance === null)) {
        return instance.getClass__jl_Class()
      } else if ((instance instanceof $c_RTLong)) {
        return $d_jl_Long.getClassOf()
      } else if ((instance instanceof $Char)) {
        return $d_jl_Character.getClassOf()
      } else if ((!(!(instance && instance.$classData)))) {
        return instance.$classData.getClassOf()
      } else {
        return null
      }
    }
  }
}
function $objectClassName(instance) {
  switch ((typeof instance)) {
    case "string": {
      return "java.lang.String"
    }
    case "number": {
      if ($isInt(instance)) {
        if ((((instance << 24) >> 24) === instance)) {
          return "java.lang.Byte"
        } else if ((((instance << 16) >> 16) === instance)) {
          return "java.lang.Short"
        } else {
          return "java.lang.Integer"
        }
      } else {
        return "java.lang.Float"
      }
    }
    case "boolean": {
      return "java.lang.Boolean"
    }
    case "undefined": {
      return "java.lang.Void"
    }
    default: {
      if ((instance === null)) {
        return instance.getClass__jl_Class()
      } else if ((instance instanceof $c_RTLong)) {
        return "java.lang.Long"
      } else if ((instance instanceof $Char)) {
        return "java.lang.Character"
      } else if ((!(!(instance && instance.$classData)))) {
        return instance.$classData.name
      } else {
        return null.getName__T()
      }
    }
  }
}
function $dp_toString__T(instance) {
  return ((instance === (void 0)) ? "undefined" : instance.toString())
}
function $dp_getClass__jl_Class(instance) {
  if (((!(!(instance && instance.$classData))) || (instance === null))) {
    return instance.getClass__jl_Class()
  } else {
    return $c_O.prototype.getClass__jl_Class.call(instance)
  }
}
function $dp_clone__O(instance) {
  return instance.clone__O()
}
function $dp_notify__V(instance) {
  return instance.notify__V()
}
function $dp_notifyAll__V(instance) {
  return instance.notifyAll__V()
}
function $dp_finalize__V(instance) {
  return instance.finalize__V()
}
function $dp_equals__O__Z(instance, x0) {
  return instance.equals__O__Z(x0)
}
function $dp_hashCode__I(instance) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__hashCode__I(instance)
    }
    case "number": {
      return $f_jl_Double__hashCode__I(instance)
    }
    case "boolean": {
      return $f_jl_Boolean__hashCode__I(instance)
    }
    case "undefined": {
      return $f_jl_Void__hashCode__I(instance)
    }
    default: {
      if (((!(!(instance && instance.$classData))) || (instance === null))) {
        return instance.hashCode__I()
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__hashCode__I(instance)
      } else {
        return $c_O.prototype.hashCode__I.call(instance)
      }
    }
  }
}
function $dp_compareTo__O__I(instance, x0) {
  return instance.compareTo__O__I(x0)
}
function $dp_length__I(instance) {
  if (((typeof instance) === "string")) {
    return $f_T__length__I(instance)
  } else {
    return instance.length__I()
  }
}
function $dp_charAt__I__C(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__charAt__I__C(instance, x0)
  } else {
    return instance.charAt__I__C(x0)
  }
}
function $dp_subSequence__I__I__jl_CharSequence(instance, x0, x1) {
  return instance.subSequence__I__I__jl_CharSequence(x0, x1)
}
function $dp_byteValue__B(instance) {
  return instance.byteValue__B()
}
function $dp_shortValue__S(instance) {
  return instance.shortValue__S()
}
function $dp_intValue__I(instance) {
  return instance.intValue__I()
}
function $dp_longValue__J(instance) {
  return instance.longValue__J()
}
function $dp_floatValue__F(instance) {
  return instance.floatValue__F()
}
function $dp_doubleValue__D(instance) {
  if (((typeof instance) === "number")) {
    return $f_jl_Double__doubleValue__D(instance)
  } else {
    return instance.doubleValue__D()
  }
}
function $intDiv(x, y) {
  if ((y === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero")
  } else {
    return ((x / y) | 0)
  }
}
function $intMod(x, y) {
  if ((y === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero")
  } else {
    return ((x % y) | 0)
  }
}
function $doubleToInt(x) {
  return ((x > 2147483647) ? 2147483647 : ((x < (-2147483648)) ? (-2147483648) : (x | 0)))
}
function $newJSObjectWithVarargs(ctor, args) {
  var instance = Object.create(ctor.prototype);
  var result = ctor.apply(instance, args);
  switch ((typeof result)) {
    case "string":
    case "number":
    case "boolean":
    case "undefined":
    case "symbol": {
      return instance
    }
    default: {
      return ((result === null) ? instance : result)
    }
  }
}
function $resolveSuperRef(superClass, propName) {
  var getPrototypeOf = Object.getPrototyeOf;
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var superProto = superClass.prototype;
  while ((superProto !== null)) {
    var desc = getOwnPropertyDescriptor(superProto, propName);
    if ((desc !== (void 0))) {
      return desc
    };
    superProto = getPrototypeOf(superProto)
  }
}
function $superGet(superClass, self, propName) {
  var desc = $resolveSuperRef(superClass, propName);
  if ((desc !== (void 0))) {
    var getter = desc.get;
    return ((getter !== (void 0)) ? getter.call(self) : getter.value)
  }
}
function $superSet(superClass, self, propName, value) {
  var desc = $resolveSuperRef(superClass, propName);
  if ((desc !== (void 0))) {
    var setter = desc.set;
    if ((setter !== (void 0))) {
      setter.call(self, value);
      return (void 0)
    }
  };
  throw new TypeError((("super has no setter '" + propName) + "'."))
}
function $systemArraycopy(src, srcPos, dest, destPos, length) {
  var srcu = src.u;
  var destu = dest.u;
  if ((((((srcPos < 0) || (destPos < 0)) || (length < 0)) || (srcPos > ((srcu.length - length) | 0))) || (destPos > ((destu.length - length) | 0)))) {
    $throwArrayIndexOutOfBoundsException(null)
  };
  if ((((srcu !== destu) || (destPos < srcPos)) || (((srcPos + length) | 0) < destPos))) {
    for (var i = 0; (i < length); i = ((i + 1) | 0)) {
      destu[((destPos + i) | 0)] = srcu[((srcPos + i) | 0)]
    }
  } else {
    for (var i = ((length - 1) | 0); (i >= 0); i = ((i - 1) | 0)) {
      destu[((destPos + i) | 0)] = srcu[((srcPos + i) | 0)]
    }
  }
}
var $lastIDHash = 0;
var $idHashCodeMap = (((typeof WeakMap) !== "undefined") ? new WeakMap() : null);
var $systemIdentityHashCode = (($idHashCodeMap !== null) ? (function(obj) {
  switch ((typeof obj)) {
    case "string":
    case "number":
    case "bigint":
    case "boolean":
    case "undefined": {
      return $dp_hashCode__I(obj)
    }
    default: {
      if ((obj === null)) {
        return 0
      } else {
        var hash = $idHashCodeMap.get(obj);
        if ((hash === (void 0))) {
          hash = (($lastIDHash + 1) | 0);
          $lastIDHash = hash;
          $idHashCodeMap.set(obj, hash)
        };
        return hash
      }
    }
  }
}) : (function(obj) {
  switch ((typeof obj)) {
    case "string":
    case "number":
    case "bigint":
    case "boolean":
    case "undefined": {
      return $dp_hashCode__I(obj)
    }
    default: {
      if ((!(!(obj && obj.$classData)))) {
        var hash = obj.$idHashCode$0;
        if ((hash !== (void 0))) {
          return hash
        } else if ((!Object.isSealed(obj))) {
          hash = (($lastIDHash + 1) | 0);
          $lastIDHash = hash;
          obj.$idHashCode$0 = hash;
          return hash
        } else {
          return 42
        }
      } else if ((obj === null)) {
        0
      } else {
        42
      }
    }
  }
}));
function $isByte(v) {
  return ((((typeof v) === "number") && (((v << 24) >> 24) === v)) && ((1 / v) !== (1 / (-0))))
}
function $isShort(v) {
  return ((((typeof v) === "number") && (((v << 16) >> 16) === v)) && ((1 / v) !== (1 / (-0))))
}
function $isInt(v) {
  return ((((typeof v) === "number") && ((v | 0) === v)) && ((1 / v) !== (1 / (-0))))
}
function $bC(c) {
  return new $Char(c)
}
var $bC0 = $bC(0);
function $uV(v) {
  return (((v === (void 0)) || (v === null)) ? (void 0) : $throwClassCastException(v, "java.lang.Void"))
}
function $uZ(v) {
  return ((((typeof v) === "boolean") || (v === null)) ? (!(!v)) : $throwClassCastException(v, "java.lang.Boolean"))
}
function $uC(v) {
  return (((v instanceof $Char) || (v === null)) ? ((v === null) ? 0 : v.c) : $throwClassCastException(v, "java.lang.Character"))
}
function $uB(v) {
  return (($isByte(v) || (v === null)) ? (v | 0) : $throwClassCastException(v, "java.lang.Byte"))
}
function $uS(v) {
  return (($isShort(v) || (v === null)) ? (v | 0) : $throwClassCastException(v, "java.lang.Short"))
}
function $uI(v) {
  return (($isInt(v) || (v === null)) ? (v | 0) : $throwClassCastException(v, "java.lang.Integer"))
}
function $uJ(v) {
  return (((v instanceof $c_RTLong) || (v === null)) ? ((v === null) ? $L0 : v) : $throwClassCastException(v, "java.lang.Long"))
}
function $uF(v) {
  return ((((typeof v) === "number") || (v === null)) ? (+v) : $throwClassCastException(v, "java.lang.Float"))
}
function $uD(v) {
  return ((((typeof v) === "number") || (v === null)) ? (+v) : $throwClassCastException(v, "java.lang.Double"))
}
function $uT(v) {
  return ((((typeof v) === "string") || (v === null)) ? ((v === null) ? "" : v) : $throwClassCastException(v, "java.lang.String"))
}
function $byteArray2TypedArray(value) {
  return new Int8Array(value.u)
}
function $typedArray2ByteArray(value) {
  return new ($d_B.getArrayOf().constr)(new Int8Array(value))
}
function $shortArray2TypedArray(value) {
  return new Int16Array(value.u)
}
function $typedArray2ShortArray(value) {
  return new ($d_S.getArrayOf().constr)(new Int16Array(value))
}
function $charArray2TypedArray(value) {
  return new Uint16Array(value.u)
}
function $typedArray2CharArray(value) {
  return new ($d_C.getArrayOf().constr)(new Uint16Array(value))
}
function $intArray2TypedArray(value) {
  return new Int32Array(value.u)
}
function $typedArray2IntArray(value) {
  return new ($d_I.getArrayOf().constr)(new Int32Array(value))
}
function $floatArray2TypedArray(value) {
  return new Float32Array(value.u)
}
function $typedArray2FloatArray(value) {
  return new ($d_F.getArrayOf().constr)(new Float32Array(value))
}
function $doubleArray2TypedArray(value) {
  return new Float64Array(value.u)
}
function $typedArray2DoubleArray(value) {
  return new ($d_D.getArrayOf().constr)(new Float64Array(value))
}
function $TypeData() {
  this.constr = (void 0);
  this.ancestors = null;
  this.componentData = null;
  this.arrayBase = null;
  this.arrayDepth = 0;
  this.zero = null;
  this.arrayEncodedName = "";
  this._classOf = (void 0);
  this._arrayOf = (void 0);
  this.isArrayOf = (void 0);
  this.name = "";
  this.isPrimitive = false;
  this.isInterface = false;
  this.isArrayClass = false;
  this.isJSClass = false;
  this.isInstance = (void 0)
}
$TypeData.prototype.initPrim = (function(zero, arrayEncodedName, displayName, isArrayOf) {
  this.ancestors = {};
  this.zero = zero;
  this.arrayEncodedName = arrayEncodedName;
  this.isArrayOf = isArrayOf;
  this.name = displayName;
  this.isPrimitive = true;
  this.isInstance = (function(obj) {
    return false
  });
  return this
});
$TypeData.prototype.initClass = (function(internalNameObj, isInterface, fullName, ancestors, isJSType, parentData, isInstance, isArrayOf) {
  var internalName = $propertyName(internalNameObj);
  this.ancestors = ancestors;
  this.arrayEncodedName = (("L" + fullName) + ";");
  this.isArrayOf = (isArrayOf || (function(obj, depth) {
    return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors[internalName])))
  }));
  this.isJSType = (!(!isJSType));
  this.name = fullName;
  this.isInterface = isInterface;
  this.isInstance = (isInstance || (function(obj) {
    return (!(!((obj && obj.$classData) && obj.$classData.ancestors[internalName])))
  }));
  return this
});
$TypeData.prototype.initArray = (function(componentData) {
  var componentZero = ((componentData.zero === "longZero") ? $L0 : componentData.zero);
  function ArrayClass(arg) {
    if (((typeof arg) === "number")) {
      this.u = new Array(arg);
      for (var i = 0; (i < arg); (i++)) {
        this.u[i] = componentZero
      }
    } else {
      this.u = arg
    }
  }
  ArrayClass.prototype = new $h_O();
  ArrayClass.prototype.constructor = ArrayClass;
  ArrayClass.prototype.get = (function(i) {
    if (((i < 0) || (i >= this.u.length))) {
      $throwArrayIndexOutOfBoundsException(i)
    };
    return this.u[i]
  });
  ArrayClass.prototype.set = (function(i, v) {
    if (((i < 0) || (i >= this.u.length))) {
      $throwArrayIndexOutOfBoundsException(i)
    };
    this.u[i] = v
  });
  ArrayClass.prototype.clone__O = (function() {
    return new ArrayClass(((this.u instanceof Array) ? this.u.slice(0) : new this.u.constructor(this.u)))
  });
  ArrayClass.prototype.$classData = this;
  var encodedName = ("[" + componentData.arrayEncodedName);
  var componentBase = (componentData.arrayBase || componentData);
  var arrayDepth = (componentData.arrayDepth + 1);
  this.constr = ArrayClass;
  this.ancestors = {
    O: 1,
    jl_Cloneable: 1,
    Ljava_io_Serializable: 1
  };
  this.componentData = componentData;
  this.arrayBase = componentBase;
  this.arrayDepth = arrayDepth;
  this.arrayEncodedName = encodedName;
  this.name = encodedName;
  this.isArrayClass = true;
  this.isInstance = (function(obj) {
    return componentBase.isArrayOf(obj, arrayDepth)
  });
  return this
});
$TypeData.prototype.getArrayOf = (function() {
  if ((!this._arrayOf)) {
    this._arrayOf = new $TypeData().initArray(this)
  };
  return this._arrayOf
});
$TypeData.prototype.getClassOf = (function() {
  if ((!this._classOf)) {
    this._classOf = new $c_jl_Class(this)
  };
  return this._classOf
});
$TypeData.prototype.isAssignableFrom = (function(that) {
  if ((this.isPrimitive || that.isPrimitive)) {
    return (this === that)
  } else {
    var thatFakeInstance;
    if ((that === $d_T)) {
      thatFakeInstance = ""
    } else if ((that === $d_jl_Boolean)) {
      thatFakeInstance = false
    } else if ((((((that === $d_jl_Byte) || (that === $d_jl_Short)) || (that === $d_jl_Integer)) || (that === $d_jl_Float)) || (that === $d_jl_Double))) {
      thatFakeInstance = 0
    } else if ((that === $d_jl_Long)) {
      thatFakeInstance = $L0
    } else if ((that === $d_jl_Character)) {
      thatFakeInstance = $bC0
    } else if ((that === $d_jl_Void)) {
      thatFakeInstance = (void 0)
    } else {
      thatFakeInstance = {
        $classData: that
      }
    };
    return this.isInstance(thatFakeInstance)
  }
});
$TypeData.prototype.checkCast = (function(obj) {
  if ((((obj !== null) && (!this.isJSType)) && (!this.isInstance(obj)))) {
    $throwClassCastException(obj, this.name)
  }
});
$TypeData.prototype.getSuperclass = (function() {
  return (this.parentData ? this.parentData.getClassOf() : null)
});
$TypeData.prototype.getComponentType = (function() {
  return (this.componentData ? this.componentData.getClassOf() : null)
});
$TypeData.prototype.newArrayOfThisClass = (function(lengths) {
  var arrayClassData = this;
  for (var i = 0; (i < lengths.length); (i++)) {
    arrayClassData = arrayClassData.getArrayOf()
  };
  return $newArrayObject(arrayClassData, lengths)
});
function $isArrayOf_V(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_V))))
}
function $isArrayOf_Z(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_Z))))
}
function $isArrayOf_C(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_C))))
}
function $isArrayOf_B(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_B))))
}
function $isArrayOf_S(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_S))))
}
function $isArrayOf_I(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_I))))
}
function $isArrayOf_J(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_J))))
}
function $isArrayOf_F(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_F))))
}
function $isArrayOf_D(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_D))))
}
function $asArrayOf_V(obj, depth) {
  if (($isArrayOf_V(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "V", depth)
  }
}
function $asArrayOf_Z(obj, depth) {
  if (($isArrayOf_Z(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "Z", depth)
  }
}
function $asArrayOf_C(obj, depth) {
  if (($isArrayOf_C(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "C", depth)
  }
}
function $asArrayOf_B(obj, depth) {
  if (($isArrayOf_B(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "B", depth)
  }
}
function $asArrayOf_S(obj, depth) {
  if (($isArrayOf_S(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "S", depth)
  }
}
function $asArrayOf_I(obj, depth) {
  if (($isArrayOf_I(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "I", depth)
  }
}
function $asArrayOf_J(obj, depth) {
  if (($isArrayOf_J(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "J", depth)
  }
}
function $asArrayOf_F(obj, depth) {
  if (($isArrayOf_F(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "F", depth)
  }
}
function $asArrayOf_D(obj, depth) {
  if (($isArrayOf_D(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "D", depth)
  }
}
var $d_V = new $TypeData().initPrim((void 0), "V", "void", $isArrayOf_V);
var $d_Z = new $TypeData().initPrim(false, "Z", "boolean", $isArrayOf_Z);
var $d_C = new $TypeData().initPrim(0, "C", "char", $isArrayOf_C);
var $d_B = new $TypeData().initPrim(0, "B", "byte", $isArrayOf_B);
var $d_S = new $TypeData().initPrim(0, "S", "short", $isArrayOf_S);
var $d_I = new $TypeData().initPrim(0, "I", "int", $isArrayOf_I);
var $d_J = new $TypeData().initPrim("longZero", "J", "long", $isArrayOf_J);
var $d_F = new $TypeData().initPrim(0.0, "F", "float", $isArrayOf_F);
var $d_D = new $TypeData().initPrim(0.0, "D", "double", $isArrayOf_D);
function $ct_O__($thiz) {
  return $thiz
}
/** @constructor */
function $c_O() {
  /*<skip>*/
}
/** @constructor */
function $h_O() {
  /*<skip>*/
}
$h_O.prototype = $c_O.prototype;
$c_O.prototype.getClass__jl_Class = (function() {
  return $objectGetClass(this)
});
$c_O.prototype.hashCode__I = (function() {
  return $m_jl_System$().identityHashCode__O__I(this)
});
$c_O.prototype.toString__T = (function() {
  return ((this.getClass__jl_Class().getName__T() + "@") + $m_jl_Integer$().toHexString__I__T(this.hashCode__I()))
});
$c_O.prototype.toString = (function() {
  return this.toString__T()
});
function $is_O(obj) {
  return (obj !== null)
}
function $as_O(obj) {
  return obj
}
function $isArrayOf_O(obj, depth) {
  var data = (obj && obj.$classData);
  if ((!data)) {
    return false
  } else {
    var arrayDepth = (data.arrayDepth || 0);
    return ((!(arrayDepth < depth)) && ((arrayDepth > depth) || (!data.arrayBase.isPrimitive)))
  }
}
function $asArrayOf_O(obj, depth) {
  return (($isArrayOf_O(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Object;", depth))
}
var $d_O = new $TypeData().initClass({
  O: 0
}, false, "java.lang.Object", {
  O: 1
}, (void 0), (void 0), $is_O, $isArrayOf_O);
$c_O.prototype.$classData = $d_O;
/** @constructor */
function $c_jl_Class(data0) {
  this.jl_Class__f_data = null;
  $ct_O__(this);
  this.jl_Class__f_data = data0
}
$c_jl_Class.prototype = new $h_O();
$c_jl_Class.prototype.constructor = $c_jl_Class;
/** @constructor */
function $h_jl_Class() {
  /*<skip>*/
}
$h_jl_Class.prototype = $c_jl_Class.prototype;
$c_jl_Class.prototype.toString__T = (function() {
  return (("" + (this.isInterface__Z() ? "interface " : (this.isPrimitive__Z() ? "" : "class "))) + this.getName__T())
});
$c_jl_Class.prototype.isInterface__Z = (function() {
  return $uZ(this.jl_Class__f_data.isInterface)
});
$c_jl_Class.prototype.isPrimitive__Z = (function() {
  return $uZ(this.jl_Class__f_data.isPrimitive)
});
$c_jl_Class.prototype.getName__T = (function() {
  return $as_T(this.jl_Class__f_data.name)
});
var $d_jl_Class = new $TypeData().initClass({
  jl_Class: 0
}, false, "java.lang.Class", {
  jl_Class: 1,
  O: 1
});
$c_jl_Class.prototype.$classData = $d_jl_Class;
function $p_jl_FloatingPointBits$__areTypedArraysSupported__Z($thiz) {
  return ($uZ($linkingInfo.assumingES6) || $thiz.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$_areTypedArraysSupported)
}
function $p_jl_FloatingPointBits$__arrayBuffer__O($thiz) {
  return $thiz.jl_FloatingPointBits$__f_arrayBuffer
}
function $p_jl_FloatingPointBits$__int32Array__O($thiz) {
  return $thiz.jl_FloatingPointBits$__f_int32Array
}
function $p_jl_FloatingPointBits$__float64Array__O($thiz) {
  return $thiz.jl_FloatingPointBits$__f_float64Array
}
function $p_jl_FloatingPointBits$__areTypedArraysBigEndian__Z($thiz) {
  return $thiz.jl_FloatingPointBits$__f_areTypedArraysBigEndian
}
function $p_jl_FloatingPointBits$__highOffset__I($thiz) {
  return $thiz.jl_FloatingPointBits$__f_highOffset
}
function $p_jl_FloatingPointBits$__lowOffset__I($thiz) {
  return $thiz.jl_FloatingPointBits$__f_lowOffset
}
function $p_jl_FloatingPointBits$__doubleToLongBitsPolyfill__D__J($thiz, value) {
  var ebits = 11;
  var fbits = 52;
  var hifbits = ((fbits - 32) | 0);
  var sef = $p_jl_FloatingPointBits$__encodeIEEE754__I__I__D__jl_FloatingPointBits$EncodeIEEE754Result($thiz, ebits, fbits, value);
  var hif = $thiz.java$lang$FloatingPointBits$$rawToInt__D__I((sef.f__D() / new $c_RTLong(0, 1).toDouble__D()));
  var hi = (((sef.s__Z() ? (-2147483648) : 0) | (sef.e__I() << hifbits)) | hif);
  var lo = $thiz.java$lang$FloatingPointBits$$rawToInt__D__I(sef.f__D());
  return $m_RTLong$().fromInt__I__RTLong(hi).$less$less__I__RTLong(32).$bar__RTLong__RTLong($m_RTLong$().fromInt__I__RTLong(lo).$amp__RTLong__RTLong(new $c_RTLong((-1), 0)))
}
function $p_jl_FloatingPointBits$__encodeIEEE754__I__I__D__jl_FloatingPointBits$EncodeIEEE754Result($thiz, ebits, fbits, v) {
  var bias = (((1 << ((ebits - 1) | 0)) - 1) | 0);
  if ($m_jl_Double$().isNaN__D__Z(v)) {
    return new $c_jl_FloatingPointBits$EncodeIEEE754Result(false, (((1 << ebits) - 1) | 0), $uD(Math.pow(2.0, ((fbits - 1) | 0))))
  } else if ($m_jl_Double$().isInfinite__D__Z(v)) {
    return new $c_jl_FloatingPointBits$EncodeIEEE754Result((v < 0), (((1 << ebits) - 1) | 0), 0.0)
  } else if ((v === 0.0)) {
    return new $c_jl_FloatingPointBits$EncodeIEEE754Result(((1 / v) === (-Infinity)), 0, 0.0)
  } else {
    var LN2 = 0.6931471805599453;
    var s = (v < 0);
    var av = (s ? (-v) : v);
    if ((av >= $uD(Math.pow(2.0, ((1 - bias) | 0))))) {
      var twoPowFbits = $uD(Math.pow(2.0, fbits));
      var e = $thiz.java$lang$FloatingPointBits$$rawToInt__D__I($uD(Math.floor(($uD(Math.log(av)) / LN2))));
      if ((e > 1023)) {
        e = 1023
      };
      var twoPowE = $uD(Math.pow(2.0, e));
      if ((twoPowE > av)) {
        e = ((e - 1) | 0);
        twoPowE = (twoPowE / 2)
      };
      var f = $thiz.java$lang$FloatingPointBits$$roundToEven__D__D(((av / twoPowE) * twoPowFbits));
      if (((f / twoPowFbits) >= 2)) {
        e = ((e + 1) | 0);
        f = 1.0
      };
      if ((e > bias)) {
        e = (((1 << ebits) - 1) | 0);
        f = 0.0
      } else {
        e = ((e + bias) | 0);
        f = (f - twoPowFbits)
      };
      return new $c_jl_FloatingPointBits$EncodeIEEE754Result(s, e, f)
    } else {
      return new $c_jl_FloatingPointBits$EncodeIEEE754Result(s, 0, $thiz.java$lang$FloatingPointBits$$roundToEven__D__D((av / $uD(Math.pow(2.0, ((((1 - bias) | 0) - fbits) | 0))))))
    }
  }
}
/** @constructor */
function $c_jl_FloatingPointBits$() {
  this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$_areTypedArraysSupported = false;
  this.jl_FloatingPointBits$__f_arrayBuffer = null;
  this.jl_FloatingPointBits$__f_int32Array = null;
  this.jl_FloatingPointBits$__f_float32Array = null;
  this.jl_FloatingPointBits$__f_float64Array = null;
  this.jl_FloatingPointBits$__f_areTypedArraysBigEndian = false;
  this.jl_FloatingPointBits$__f_highOffset = 0;
  this.jl_FloatingPointBits$__f_lowOffset = 0;
  $ct_O__(this);
  $n_jl_FloatingPointBits$ = this;
  this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$_areTypedArraysSupported = ($uZ($linkingInfo.assumingES6) || ((((!$is($as_T((typeof ArrayBuffer)), "undefined")) && (!$is($as_T((typeof Int32Array)), "undefined"))) && (!$is($as_T((typeof Float32Array)), "undefined"))) && (!$is($as_T((typeof Float64Array)), "undefined"))));
  this.jl_FloatingPointBits$__f_arrayBuffer = ($p_jl_FloatingPointBits$__areTypedArraysSupported__Z(this) ? new ArrayBuffer(8) : null);
  this.jl_FloatingPointBits$__f_int32Array = ($p_jl_FloatingPointBits$__areTypedArraysSupported__Z(this) ? new Int32Array($p_jl_FloatingPointBits$__arrayBuffer__O(this), 0, 2) : null);
  this.jl_FloatingPointBits$__f_float32Array = ($p_jl_FloatingPointBits$__areTypedArraysSupported__Z(this) ? new Float32Array($p_jl_FloatingPointBits$__arrayBuffer__O(this), 0, 2) : null);
  this.jl_FloatingPointBits$__f_float64Array = ($p_jl_FloatingPointBits$__areTypedArraysSupported__Z(this) ? new Float64Array($p_jl_FloatingPointBits$__arrayBuffer__O(this), 0, 1) : null);
  if ($p_jl_FloatingPointBits$__areTypedArraysSupported__Z(this)) {
    $p_jl_FloatingPointBits$__int32Array__O(this)[0] = 16909060;
    var $$x1 = ($uB(new Int8Array($p_jl_FloatingPointBits$__arrayBuffer__O(this), 0, 8)[0]) === 1)
  } else {
    var $$x1 = true
  };
  this.jl_FloatingPointBits$__f_areTypedArraysBigEndian = $$x1;
  this.jl_FloatingPointBits$__f_highOffset = ($p_jl_FloatingPointBits$__areTypedArraysBigEndian__Z(this) ? 0 : 1);
  this.jl_FloatingPointBits$__f_lowOffset = ($p_jl_FloatingPointBits$__areTypedArraysBigEndian__Z(this) ? 1 : 0)
}
$c_jl_FloatingPointBits$.prototype = new $h_O();
$c_jl_FloatingPointBits$.prototype.constructor = $c_jl_FloatingPointBits$;
/** @constructor */
function $h_jl_FloatingPointBits$() {
  /*<skip>*/
}
$h_jl_FloatingPointBits$.prototype = $c_jl_FloatingPointBits$.prototype;
$c_jl_FloatingPointBits$.prototype.numberHashCode__D__I = (function(value) {
  var iv = this.java$lang$FloatingPointBits$$rawToInt__D__I(value);
  return (((iv === value) && ((1.0 / value) !== (-Infinity))) ? iv : this.doubleToLongBits__D__J(value).hashCode__I())
});
$c_jl_FloatingPointBits$.prototype.doubleToLongBits__D__J = (function(value) {
  if ($p_jl_FloatingPointBits$__areTypedArraysSupported__Z(this)) {
    $p_jl_FloatingPointBits$__float64Array__O(this)[0] = value;
    return $m_RTLong$().fromInt__I__RTLong($uI($p_jl_FloatingPointBits$__int32Array__O(this)[$p_jl_FloatingPointBits$__highOffset__I(this)])).$less$less__I__RTLong(32).$bar__RTLong__RTLong($m_RTLong$().fromInt__I__RTLong($uI($p_jl_FloatingPointBits$__int32Array__O(this)[$p_jl_FloatingPointBits$__lowOffset__I(this)])).$amp__RTLong__RTLong(new $c_RTLong((-1), 0)))
  } else {
    return $p_jl_FloatingPointBits$__doubleToLongBitsPolyfill__D__J(this, value)
  }
});
$c_jl_FloatingPointBits$.prototype.java$lang$FloatingPointBits$$rawToInt__D__I = (function(x) {
  return $uI((x | 0))
});
$c_jl_FloatingPointBits$.prototype.java$lang$FloatingPointBits$$roundToEven__D__D = (function(n) {
  var w = $uD(Math.floor(n));
  var f = (n - w);
  return ((f < 0.5) ? w : ((f > 0.5) ? (w + 1) : (((w % 2) !== 0) ? (w + 1) : w)))
});
var $d_jl_FloatingPointBits$ = new $TypeData().initClass({
  jl_FloatingPointBits$: 0
}, false, "java.lang.FloatingPointBits$", {
  jl_FloatingPointBits$: 1,
  O: 1
});
$c_jl_FloatingPointBits$.prototype.$classData = $d_jl_FloatingPointBits$;
var $n_jl_FloatingPointBits$ = (void 0);
function $m_jl_FloatingPointBits$() {
  if ((!$n_jl_FloatingPointBits$)) {
    $n_jl_FloatingPointBits$ = new $c_jl_FloatingPointBits$()
  };
  return $n_jl_FloatingPointBits$
}
/** @constructor */
function $c_jl_FloatingPointBits$EncodeIEEE754Result(s, e, f) {
  this.jl_FloatingPointBits$EncodeIEEE754Result__f_s = false;
  this.jl_FloatingPointBits$EncodeIEEE754Result__f_e = 0;
  this.jl_FloatingPointBits$EncodeIEEE754Result__f_f = 0.0;
  this.jl_FloatingPointBits$EncodeIEEE754Result__f_s = s;
  this.jl_FloatingPointBits$EncodeIEEE754Result__f_e = e;
  this.jl_FloatingPointBits$EncodeIEEE754Result__f_f = f;
  $ct_O__(this)
}
$c_jl_FloatingPointBits$EncodeIEEE754Result.prototype = new $h_O();
$c_jl_FloatingPointBits$EncodeIEEE754Result.prototype.constructor = $c_jl_FloatingPointBits$EncodeIEEE754Result;
/** @constructor */
function $h_jl_FloatingPointBits$EncodeIEEE754Result() {
  /*<skip>*/
}
$h_jl_FloatingPointBits$EncodeIEEE754Result.prototype = $c_jl_FloatingPointBits$EncodeIEEE754Result.prototype;
$c_jl_FloatingPointBits$EncodeIEEE754Result.prototype.s__Z = (function() {
  return this.jl_FloatingPointBits$EncodeIEEE754Result__f_s
});
$c_jl_FloatingPointBits$EncodeIEEE754Result.prototype.e__I = (function() {
  return this.jl_FloatingPointBits$EncodeIEEE754Result__f_e
});
$c_jl_FloatingPointBits$EncodeIEEE754Result.prototype.f__D = (function() {
  return this.jl_FloatingPointBits$EncodeIEEE754Result__f_f
});
var $d_jl_FloatingPointBits$EncodeIEEE754Result = new $TypeData().initClass({
  jl_FloatingPointBits$EncodeIEEE754Result: 0
}, false, "java.lang.FloatingPointBits$EncodeIEEE754Result", {
  jl_FloatingPointBits$EncodeIEEE754Result: 1,
  O: 1
});
$c_jl_FloatingPointBits$EncodeIEEE754Result.prototype.$classData = $d_jl_FloatingPointBits$EncodeIEEE754Result;
/** @constructor */
function $c_jl_StackTrace$() {
  this.jl_StackTrace$__f_decompressedClasses = null;
  this.jl_StackTrace$__f_decompressedPrefixes = null;
  this.jl_StackTrace$__f_compressedPrefixes = null;
  this.jl_StackTrace$__f_bitmap$0 = 0;
  $ct_O__(this);
  $n_jl_StackTrace$ = this
}
$c_jl_StackTrace$.prototype = new $h_O();
$c_jl_StackTrace$.prototype.constructor = $c_jl_StackTrace$;
/** @constructor */
function $h_jl_StackTrace$() {
  /*<skip>*/
}
$h_jl_StackTrace$.prototype = $c_jl_StackTrace$.prototype;
$c_jl_StackTrace$.prototype.captureState__jl_Throwable__V = (function(throwable) {
  var throwableAsJSAny = throwable;
  var identifyingString = Object.prototype.toString.call(throwableAsJSAny);
  if ($is("[object Error]", identifyingString)) {
    this.captureState__jl_Throwable__O__V(throwable, throwable)
  } else if ((Error.captureStackTrace === (void 0))) {
    this.captureState__jl_Throwable__O__V(throwable, this.java$lang$StackTrace$$createException__O())
  } else {
    Error.captureStackTrace(throwableAsJSAny);
    this.captureState__jl_Throwable__O__V(throwable, throwable)
  }
});
$c_jl_StackTrace$.prototype.java$lang$StackTrace$$createException__O = (function() {
  return new Error()
});
$c_jl_StackTrace$.prototype.captureState__jl_Throwable__O__V = (function(throwable, e) {
  throwable.setStackTraceStateInternal__O__V(e)
});
var $d_jl_StackTrace$ = new $TypeData().initClass({
  jl_StackTrace$: 0
}, false, "java.lang.StackTrace$", {
  jl_StackTrace$: 1,
  O: 1
});
$c_jl_StackTrace$.prototype.$classData = $d_jl_StackTrace$;
var $n_jl_StackTrace$ = (void 0);
function $m_jl_StackTrace$() {
  if ((!$n_jl_StackTrace$)) {
    $n_jl_StackTrace$ = new $c_jl_StackTrace$()
  };
  return $n_jl_StackTrace$
}
/** @constructor */
function $c_jl_System$() {
  $ct_O__(this);
  $n_jl_System$ = this
}
$c_jl_System$.prototype = new $h_O();
$c_jl_System$.prototype.constructor = $c_jl_System$;
/** @constructor */
function $h_jl_System$() {
  /*<skip>*/
}
$h_jl_System$.prototype = $c_jl_System$.prototype;
$c_jl_System$.prototype.identityHashCode__O__I = (function(x) {
  return $systemIdentityHashCode(x)
});
var $d_jl_System$ = new $TypeData().initClass({
  jl_System$: 0
}, false, "java.lang.System$", {
  jl_System$: 1,
  O: 1
});
$c_jl_System$.prototype.$classData = $d_jl_System$;
var $n_jl_System$ = (void 0);
function $m_jl_System$() {
  if ((!$n_jl_System$)) {
    $n_jl_System$ = new $c_jl_System$()
  };
  return $n_jl_System$
}
function $f_jl_Void__hashCode__I($thiz) {
  return 0
}
function $f_jl_Void__toString__T($thiz) {
  return "undefined"
}
var $d_jl_Void = new $TypeData().initClass({
  jl_Void: 0
}, false, "java.lang.Void", {
  jl_Void: 1,
  O: 1
}, (void 0), (void 0), (function(x) {
  return (x === (void 0))
}));
/** @constructor */
function $c_jl_Boolean$() {
  $ct_O__(this);
  $n_jl_Boolean$ = this
}
$c_jl_Boolean$.prototype = new $h_O();
$c_jl_Boolean$.prototype.constructor = $c_jl_Boolean$;
/** @constructor */
function $h_jl_Boolean$() {
  /*<skip>*/
}
$h_jl_Boolean$.prototype = $c_jl_Boolean$.prototype;
$c_jl_Boolean$.prototype.toString__Z__T = (function(b) {
  return ("" + b)
});
var $d_jl_Boolean$ = new $TypeData().initClass({
  jl_Boolean$: 0
}, false, "java.lang.Boolean$", {
  jl_Boolean$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_Boolean$.prototype.$classData = $d_jl_Boolean$;
var $n_jl_Boolean$ = (void 0);
function $m_jl_Boolean$() {
  if ((!$n_jl_Boolean$)) {
    $n_jl_Boolean$ = new $c_jl_Boolean$()
  };
  return $n_jl_Boolean$
}
/** @constructor */
function $c_jl_Byte$() {
  $ct_O__(this);
  $n_jl_Byte$ = this
}
$c_jl_Byte$.prototype = new $h_O();
$c_jl_Byte$.prototype.constructor = $c_jl_Byte$;
/** @constructor */
function $h_jl_Byte$() {
  /*<skip>*/
}
$h_jl_Byte$.prototype = $c_jl_Byte$.prototype;
$c_jl_Byte$.prototype.toString__B__T = (function(b) {
  return ("" + b)
});
var $d_jl_Byte$ = new $TypeData().initClass({
  jl_Byte$: 0
}, false, "java.lang.Byte$", {
  jl_Byte$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_Byte$.prototype.$classData = $d_jl_Byte$;
var $n_jl_Byte$ = (void 0);
function $m_jl_Byte$() {
  if ((!$n_jl_Byte$)) {
    $n_jl_Byte$ = new $c_jl_Byte$()
  };
  return $n_jl_Byte$
}
/** @constructor */
function $c_jl_Character$() {
  this.jl_Character$__f_java$lang$Character$$charTypesFirst256 = null;
  this.jl_Character$__f_charTypeIndices = null;
  this.jl_Character$__f_charTypes = null;
  this.jl_Character$__f_isMirroredIndices = null;
  this.jl_Character$__f_nonASCIIZeroDigitCodePoints = null;
  this.jl_Character$__f_bitmap$0 = 0;
  $ct_O__(this);
  $n_jl_Character$ = this
}
$c_jl_Character$.prototype = new $h_O();
$c_jl_Character$.prototype.constructor = $c_jl_Character$;
/** @constructor */
function $h_jl_Character$() {
  /*<skip>*/
}
$h_jl_Character$.prototype = $c_jl_Character$.prototype;
$c_jl_Character$.prototype.toString__C__T = (function(c) {
  return $as_T(String.fromCharCode(c))
});
var $d_jl_Character$ = new $TypeData().initClass({
  jl_Character$: 0
}, false, "java.lang.Character$", {
  jl_Character$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_Character$.prototype.$classData = $d_jl_Character$;
var $n_jl_Character$ = (void 0);
function $m_jl_Character$() {
  if ((!$n_jl_Character$)) {
    $n_jl_Character$ = new $c_jl_Character$()
  };
  return $n_jl_Character$
}
/** @constructor */
function $c_jl_Double$() {
  this.jl_Double$__f_doubleStrPat = null;
  this.jl_Double$__f_doubleStrHexPat = null;
  this.jl_Double$__f_bitmap$0 = 0;
  $ct_O__(this);
  $n_jl_Double$ = this
}
$c_jl_Double$.prototype = new $h_O();
$c_jl_Double$.prototype.constructor = $c_jl_Double$;
/** @constructor */
function $h_jl_Double$() {
  /*<skip>*/
}
$h_jl_Double$.prototype = $c_jl_Double$.prototype;
$c_jl_Double$.prototype.toString__D__T = (function(d) {
  return ("" + d)
});
$c_jl_Double$.prototype.isNaN__D__Z = (function(v) {
  return (v !== v)
});
$c_jl_Double$.prototype.isInfinite__D__Z = (function(v) {
  return ((v === Infinity) || (v === (-Infinity)))
});
$c_jl_Double$.prototype.hashCode__D__I = (function(value) {
  return $m_jl_FloatingPointBits$().numberHashCode__D__I(value)
});
var $d_jl_Double$ = new $TypeData().initClass({
  jl_Double$: 0
}, false, "java.lang.Double$", {
  jl_Double$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_Double$.prototype.$classData = $d_jl_Double$;
var $n_jl_Double$ = (void 0);
function $m_jl_Double$() {
  if ((!$n_jl_Double$)) {
    $n_jl_Double$ = new $c_jl_Double$()
  };
  return $n_jl_Double$
}
/** @constructor */
function $c_jl_Float$() {
  $ct_O__(this);
  $n_jl_Float$ = this
}
$c_jl_Float$.prototype = new $h_O();
$c_jl_Float$.prototype.constructor = $c_jl_Float$;
/** @constructor */
function $h_jl_Float$() {
  /*<skip>*/
}
$h_jl_Float$.prototype = $c_jl_Float$.prototype;
$c_jl_Float$.prototype.toString__F__T = (function(f) {
  return ("" + f)
});
$c_jl_Float$.prototype.hashCode__F__I = (function(value) {
  return $m_jl_FloatingPointBits$().numberHashCode__D__I(value)
});
var $d_jl_Float$ = new $TypeData().initClass({
  jl_Float$: 0
}, false, "java.lang.Float$", {
  jl_Float$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_Float$.prototype.$classData = $d_jl_Float$;
var $n_jl_Float$ = (void 0);
function $m_jl_Float$() {
  if ((!$n_jl_Float$)) {
    $n_jl_Float$ = new $c_jl_Float$()
  };
  return $n_jl_Float$
}
/** @constructor */
function $c_jl_Integer$() {
  $ct_O__(this);
  $n_jl_Integer$ = this
}
$c_jl_Integer$.prototype = new $h_O();
$c_jl_Integer$.prototype.constructor = $c_jl_Integer$;
/** @constructor */
function $h_jl_Integer$() {
  /*<skip>*/
}
$h_jl_Integer$.prototype = $c_jl_Integer$.prototype;
$c_jl_Integer$.prototype.toString__I__T = (function(i) {
  return ("" + i)
});
$c_jl_Integer$.prototype.numberOfLeadingZeros__I__I = (function(i) {
  var x = i;
  if ((x === 0)) {
    return 32
  } else {
    var r = 1;
    if (((x & (-65536)) === 0)) {
      x = (x << 16);
      r = ((r + 16) | 0)
    };
    if (((x & (-16777216)) === 0)) {
      x = (x << 8);
      r = ((r + 8) | 0)
    };
    if (((x & (-268435456)) === 0)) {
      x = (x << 4);
      r = ((r + 4) | 0)
    };
    if (((x & (-1073741824)) === 0)) {
      x = (x << 2);
      r = ((r + 2) | 0)
    };
    return ((r + (x >> 31)) | 0)
  }
});
$c_jl_Integer$.prototype.toHexString__I__T = (function(i) {
  return this.java$lang$Integer$$toStringBase__I__I__T(i, 16)
});
$c_jl_Integer$.prototype.java$lang$Integer$$toStringBase__I__I__T = (function(i, base) {
  return $as_T(this.java$lang$Integer$$asUint__I__D(i).toString(base))
});
$c_jl_Integer$.prototype.java$lang$Integer$$asUint__I__D = (function(n) {
  return $uD((n >>> 0))
});
var $d_jl_Integer$ = new $TypeData().initClass({
  jl_Integer$: 0
}, false, "java.lang.Integer$", {
  jl_Integer$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_Integer$.prototype.$classData = $d_jl_Integer$;
var $n_jl_Integer$ = (void 0);
function $m_jl_Integer$() {
  if ((!$n_jl_Integer$)) {
    $n_jl_Integer$ = new $c_jl_Integer$()
  };
  return $n_jl_Integer$
}
/** @constructor */
function $c_jl_Long$() {
  this.jl_Long$__f_StringRadixInfos = null;
  this.jl_Long$__f_bitmap$0 = false;
  $ct_O__(this);
  $n_jl_Long$ = this
}
$c_jl_Long$.prototype = new $h_O();
$c_jl_Long$.prototype.constructor = $c_jl_Long$;
/** @constructor */
function $h_jl_Long$() {
  /*<skip>*/
}
$h_jl_Long$.prototype = $c_jl_Long$.prototype;
$c_jl_Long$.prototype.toString__J__T = (function(i) {
  return ("" + i)
});
$c_jl_Long$.prototype.hashCode__J__I = (function(value) {
  return (value.toInt__I() ^ value.$greater$greater$greater__I__RTLong(32).toInt__I())
});
var $d_jl_Long$ = new $TypeData().initClass({
  jl_Long$: 0
}, false, "java.lang.Long$", {
  jl_Long$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_Long$.prototype.$classData = $d_jl_Long$;
var $n_jl_Long$ = (void 0);
function $m_jl_Long$() {
  if ((!$n_jl_Long$)) {
    $n_jl_Long$ = new $c_jl_Long$()
  };
  return $n_jl_Long$
}
function $ct_jl_Number__($thiz) {
  $ct_O__($thiz);
  return $thiz
}
/** @constructor */
function $c_jl_Number() {
  /*<skip>*/
}
$c_jl_Number.prototype = new $h_O();
$c_jl_Number.prototype.constructor = $c_jl_Number;
/** @constructor */
function $h_jl_Number() {
  /*<skip>*/
}
$h_jl_Number.prototype = $c_jl_Number.prototype;
/** @constructor */
function $c_jl_Short$() {
  $ct_O__(this);
  $n_jl_Short$ = this
}
$c_jl_Short$.prototype = new $h_O();
$c_jl_Short$.prototype.constructor = $c_jl_Short$;
/** @constructor */
function $h_jl_Short$() {
  /*<skip>*/
}
$h_jl_Short$.prototype = $c_jl_Short$.prototype;
$c_jl_Short$.prototype.toString__S__T = (function(s) {
  return ("" + s)
});
var $d_jl_Short$ = new $TypeData().initClass({
  jl_Short$: 0
}, false, "java.lang.Short$", {
  jl_Short$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_Short$.prototype.$classData = $d_jl_Short$;
var $n_jl_Short$ = (void 0);
function $m_jl_Short$() {
  if ((!$n_jl_Short$)) {
    $n_jl_Short$ = new $c_jl_Short$()
  };
  return $n_jl_Short$
}
function $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, e, enableSuppression, writableStackTrace) {
  $thiz.jl_Throwable__f_s = s;
  $thiz.jl_Throwable__f_e = e;
  $thiz.jl_Throwable__f_enableSuppression = enableSuppression;
  $thiz.jl_Throwable__f_writableStackTrace = writableStackTrace;
  $ct_O__($thiz);
  if (writableStackTrace) {
    $thiz.fillInStackTrace__jl_Throwable()
  } else {
    (void 0)
  };
  return $thiz
}
/** @constructor */
function $c_jl_Throwable() {
  this.jl_Throwable__f_s = null;
  this.jl_Throwable__f_e = null;
  this.jl_Throwable__f_enableSuppression = false;
  this.jl_Throwable__f_writableStackTrace = false;
  this.jl_Throwable__f_stackTraceStateInternal = null;
  this.jl_Throwable__f_stackTrace = null;
  this.jl_Throwable__f_suppressed = null
}
/** @constructor */
function $hh_jl_Throwable() {
  /*<skip>*/
}
$hh_jl_Throwable.prototype = Error.prototype;
$c_jl_Throwable.prototype = new $hh_jl_Throwable();
$c_jl_Throwable.prototype.constructor = $c_jl_Throwable;
/** @constructor */
function $h_jl_Throwable() {
  /*<skip>*/
}
$h_jl_Throwable.prototype = $c_jl_Throwable.prototype;
$c_jl_Throwable.prototype.getMessage__T = (function() {
  return this.jl_Throwable__f_s
});
$c_jl_Throwable.prototype.fillInStackTrace__jl_Throwable = (function() {
  $m_jl_StackTrace$().captureState__jl_Throwable__V(this);
  return this
});
$c_jl_Throwable.prototype.setStackTraceStateInternal__O__V = (function(e) {
  this.jl_Throwable__f_stackTraceStateInternal = e
});
$c_jl_Throwable.prototype.toString__T = (function() {
  var className = this.getClass__jl_Class().getName__T();
  var message = this.getMessage__T();
  return ((message === null) ? className : ((className + ": ") + message))
});
$c_jl_Throwable.prototype.js_name__T = (function() {
  return this.getClass__jl_Class().getName__T()
});
$c_jl_Throwable.prototype.js_message__T = (function() {
  var m = this.getMessage__T();
  return ((m === null) ? "" : m)
});
$c_jl_Throwable.prototype.$js$exported$meth$toString__O = (function() {
  return this.toString__T()
});
$c_jl_Throwable.prototype.$js$exported$prop$name__O = (function() {
  return this.js_name__T()
});
$c_jl_Throwable.prototype.$js$exported$prop$message__O = (function() {
  return this.js_message__T()
});
$c_jl_Throwable.prototype.getClass__jl_Class = (function() {
  return $c_O.prototype.getClass__jl_Class.call(this)
});
$c_jl_Throwable.prototype.hashCode__I = (function() {
  return $c_O.prototype.hashCode__I.call(this)
});
Object.defineProperty($c_jl_Throwable.prototype, "message", {
  "get": (function() {
    return this.$js$exported$prop$message__O()
  }),
  "configurable": true
});
Object.defineProperty($c_jl_Throwable.prototype, "name", {
  "get": (function() {
    return this.$js$exported$prop$name__O()
  }),
  "configurable": true
});
$c_jl_Throwable.prototype.toString = (function() {
  return this.$js$exported$meth$toString__O()
});
function $p_RTLong$__toUnsignedString__I__I__T($thiz, lo, hi) {
  return ($thiz.isUnsignedSafeDouble__I__Z(hi) ? $f_jl_Double__toString__T($thiz.asUnsignedSafeDouble__I__I__D(lo, hi)) : $as_T($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, lo, hi, 1000000000, 0, 2)))
}
function $p_RTLong$__unsigned_$div__I__I__I__I__I($thiz, alo, ahi, blo, bhi) {
  if ($thiz.isUnsignedSafeDouble__I__Z(ahi)) {
    if ($thiz.isUnsignedSafeDouble__I__Z(bhi)) {
      var aDouble = $thiz.asUnsignedSafeDouble__I__I__D(alo, ahi);
      var bDouble = $thiz.asUnsignedSafeDouble__I__I__D(blo, bhi);
      var rDouble = (aDouble / bDouble);
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = $thiz.unsignedSafeDoubleHi__D__I(rDouble);
      return $thiz.unsignedSafeDoubleLo__D__I(rDouble)
    } else {
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
      return 0
    }
  } else if (((bhi === 0) && $thiz.isPowerOfTwo_IKnowItsNot0__I__Z(blo))) {
    var pow = $thiz.log2OfPowerOfTwo__I__I(blo);
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((ahi >>> pow) | 0);
    return (((alo >>> pow) | 0) | ((ahi << 1) << ((31 - pow) | 0)))
  } else if (((blo === 0) && $thiz.isPowerOfTwo_IKnowItsNot0__I__Z(bhi))) {
    var pow$2 = $thiz.log2OfPowerOfTwo__I__I(bhi);
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
    return ((ahi >>> pow$2) | 0)
  } else {
    return $uI($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, 0))
  }
}
function $p_RTLong$__unsigned_$percent__I__I__I__I__I($thiz, alo, ahi, blo, bhi) {
  if ($thiz.isUnsignedSafeDouble__I__Z(ahi)) {
    if ($thiz.isUnsignedSafeDouble__I__Z(bhi)) {
      var aDouble = $thiz.asUnsignedSafeDouble__I__I__D(alo, ahi);
      var bDouble = $thiz.asUnsignedSafeDouble__I__I__D(blo, bhi);
      var rDouble = (aDouble % bDouble);
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = $thiz.unsignedSafeDoubleHi__D__I(rDouble);
      return $thiz.unsignedSafeDoubleLo__D__I(rDouble)
    } else {
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ahi;
      return alo
    }
  } else if (((bhi === 0) && $thiz.isPowerOfTwo_IKnowItsNot0__I__Z(blo))) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
    return (alo & ((blo - 1) | 0))
  } else if (((blo === 0) && $thiz.isPowerOfTwo_IKnowItsNot0__I__Z(bhi))) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (ahi & ((bhi - 1) | 0));
    return alo
  } else {
    return $uI($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, 1))
  }
}
function $p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, ask) {
  var shift = (($thiz.inlineNumberOfLeadingZeros__I__I__I(blo, bhi) - $thiz.inlineNumberOfLeadingZeros__I__I__I(alo, ahi)) | 0);
  var initialBShift = new $c_RTLong(blo, bhi).$less$less__I__RTLong(shift);
  var bShiftLo = initialBShift.lo__I();
  var bShiftHi = initialBShift.hi__I();
  var remLo = alo;
  var remHi = ahi;
  var quotLo = 0;
  var quotHi = 0;
  while (((shift >= 0) && ((remHi & (-2097152)) !== 0))) {
    if ($thiz.inlineUnsigned_$greater$eq__I__I__I__I__Z(remLo, remHi, bShiftLo, bShiftHi)) {
      var newRem = new $c_RTLong(remLo, remHi).$minus__RTLong__RTLong(new $c_RTLong(bShiftLo, bShiftHi));
      remLo = newRem.lo__I();
      remHi = newRem.hi__I();
      if ((shift < 32)) {
        quotLo = (quotLo | (1 << shift))
      } else {
        quotHi = (quotHi | (1 << shift))
      }
    };
    shift = ((shift - 1) | 0);
    var newBShift = new $c_RTLong(bShiftLo, bShiftHi).$greater$greater$greater__I__RTLong(1);
    bShiftLo = newBShift.lo__I();
    bShiftHi = newBShift.hi__I()
  };
  if ($thiz.inlineUnsigned_$greater$eq__I__I__I__I__Z(remLo, remHi, blo, bhi)) {
    var remDouble = $thiz.asUnsignedSafeDouble__I__I__D(remLo, remHi);
    var bDouble = $thiz.asUnsignedSafeDouble__I__I__D(blo, bhi);
    if ((ask !== 1)) {
      var rem_div_bDouble = $thiz.fromUnsignedSafeDouble__D__RTLong((remDouble / bDouble));
      var newQuot = new $c_RTLong(quotLo, quotHi).$plus__RTLong__RTLong(rem_div_bDouble);
      quotLo = newQuot.lo__I();
      quotHi = newQuot.hi__I()
    };
    if ((ask !== 0)) {
      var rem_mod_bDouble = (remDouble % bDouble);
      remLo = $thiz.unsignedSafeDoubleLo__D__I(rem_mod_bDouble);
      remHi = $thiz.unsignedSafeDoubleHi__D__I(rem_mod_bDouble)
    }
  };
  if ((ask === 0)) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = quotHi;
    return quotLo
  } else if ((ask === 1)) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = remHi;
    return remLo
  } else {
    var quot = $thiz.asUnsignedSafeDouble__I__I__D(quotLo, quotHi);
    var remStr = $f_jl_Integer__toString__T(remLo);
    return ((("" + $f_jl_Double__toString__T(quot)) + $p_RTLong$__substring__T__I__T($thiz, "000000000", $f_T__length__I(remStr))) + remStr)
  }
}
function $p_RTLong$__inline_hiReturn_unary_$minus__I__I__I($thiz, lo, hi) {
  $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = $thiz.inline_hi_unary_$minus__I__I__I(lo, hi);
  return $thiz.inline_lo_unary_$minus__I__I(lo)
}
function $p_RTLong$__substring__T__I__T($thiz, s, start) {
  return $as_T(s.substring(start))
}
/** @constructor */
function $c_RTLong$() {
  this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
  $ct_O__(this);
  $n_RTLong$ = this
}
$c_RTLong$.prototype = new $h_O();
$c_RTLong$.prototype.constructor = $c_RTLong$;
/** @constructor */
function $h_RTLong$() {
  /*<skip>*/
}
$h_RTLong$.prototype = $c_RTLong$.prototype;
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T = (function(lo, hi) {
  return (this.isInt32__I__I__Z(lo, hi) ? $f_jl_Integer__toString__T(lo) : ((hi < 0) ? ("-" + $p_RTLong$__toUnsignedString__I__I__T(this, this.inline_lo_unary_$minus__I__I(lo), this.inline_hi_unary_$minus__I__I__I(lo, hi))) : $p_RTLong$__toUnsignedString__I__I__T(this, lo, hi)))
});
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D = (function(lo, hi) {
  return ((hi < 0) ? (-((this.asUint__I__D(this.inline_hi_unary_$minus__I__I__I(lo, hi)) * 4.294967296E9) + this.asUint__I__D(this.inline_lo_unary_$minus__I__I(lo)))) : ((hi * 4.294967296E9) + this.asUint__I__D(lo)))
});
$c_RTLong$.prototype.fromInt__I__RTLong = (function(value) {
  return new $c_RTLong(value, (value >> 31))
});
$c_RTLong$.prototype.fromDouble__D__RTLong = (function(value) {
  var lo = this.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(value);
  return new $c_RTLong(lo, this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn)
});
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I = (function(value) {
  if ((value < (-9.223372036854776E18))) {
    this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (-2147483648);
    return 0
  } else if ((value >= 9.223372036854776E18)) {
    this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 2147483647;
    return (-1)
  } else {
    var rawLo = this.rawToInt__D__I(value);
    var rawHi = this.rawToInt__D__I((value / 4.294967296E9));
    this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (((value < 0) && (rawLo !== 0)) ? ((rawHi - 1) | 0) : rawHi);
    return rawLo
  }
});
$c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I = (function(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo === blo) ? 0 : (this.inlineUnsignedInt_$less__I__I__Z(alo, blo) ? (-1) : 1)) : ((ahi < bhi) ? (-1) : 1))
});
$c_RTLong$.prototype.divide__RTLong__RTLong__RTLong = (function(a, b) {
  var lo = this.divideImpl__I__I__I__I__I(a.lo__I(), a.hi__I(), b.lo__I(), b.hi__I());
  return new $c_RTLong(lo, this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn)
});
$c_RTLong$.prototype.divideImpl__I__I__I__I__I = (function(alo, ahi, blo, bhi) {
  if (this.isZero__I__I__Z(blo, bhi)) {
    throw new $c_jl_ArithmeticException("/ by zero")
  };
  if (this.isInt32__I__I__Z(alo, ahi)) {
    if (this.isInt32__I__I__Z(blo, bhi)) {
      if (((alo === (-2147483648)) && (blo === (-1)))) {
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
        return (-2147483648)
      } else {
        var lo = $intDiv(alo, blo);
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (lo >> 31);
        return lo
      }
    } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (-1);
      return (-1)
    } else {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
      return 0
    }
  } else {
    var aAbs = this.inline_abs__I__I__RTLong(alo, ahi);
    var bAbs = this.inline_abs__I__I__RTLong(blo, bhi);
    var absRLo = $p_RTLong$__unsigned_$div__I__I__I__I__I(this, aAbs.lo__I(), aAbs.hi__I(), bAbs.lo__I(), bAbs.hi__I());
    return (((ahi ^ bhi) >= 0) ? absRLo : $p_RTLong$__inline_hiReturn_unary_$minus__I__I__I(this, absRLo, this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn))
  }
});
$c_RTLong$.prototype.remainder__RTLong__RTLong__RTLong = (function(a, b) {
  var lo = this.remainderImpl__I__I__I__I__I(a.lo__I(), a.hi__I(), b.lo__I(), b.hi__I());
  return new $c_RTLong(lo, this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn)
});
$c_RTLong$.prototype.remainderImpl__I__I__I__I__I = (function(alo, ahi, blo, bhi) {
  if (this.isZero__I__I__Z(blo, bhi)) {
    throw new $c_jl_ArithmeticException("/ by zero")
  };
  if (this.isInt32__I__I__Z(alo, ahi)) {
    if (this.isInt32__I__I__Z(blo, bhi)) {
      if ((blo !== (-1))) {
        var lo = $intMod(alo, blo);
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (lo >> 31);
        return lo
      } else {
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
        return 0
      }
    } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
      return 0
    } else {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ahi;
      return alo
    }
  } else {
    var aAbs = this.inline_abs__I__I__RTLong(alo, ahi);
    var bAbs = this.inline_abs__I__I__RTLong(blo, bhi);
    var absRLo = $p_RTLong$__unsigned_$percent__I__I__I__I__I(this, aAbs.lo__I(), aAbs.hi__I(), bAbs.lo__I(), bAbs.hi__I());
    return ((ahi < 0) ? $p_RTLong$__inline_hiReturn_unary_$minus__I__I__I(this, absRLo, this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn) : absRLo)
  }
});
$c_RTLong$.prototype.isZero__I__I__Z = (function(lo, hi) {
  return ((lo | hi) === 0)
});
$c_RTLong$.prototype.isInt32__I__I__Z = (function(lo, hi) {
  return (hi === (lo >> 31))
});
$c_RTLong$.prototype.isUnsignedSafeDouble__I__Z = (function(hi) {
  return ((hi & (-2097152)) === 0)
});
$c_RTLong$.prototype.asUnsignedSafeDouble__I__I__D = (function(lo, hi) {
  return ((hi * 4.294967296E9) + this.asUint__I__D(lo))
});
$c_RTLong$.prototype.fromUnsignedSafeDouble__D__RTLong = (function(x) {
  return new $c_RTLong(this.unsignedSafeDoubleLo__D__I(x), this.unsignedSafeDoubleHi__D__I(x))
});
$c_RTLong$.prototype.unsignedSafeDoubleLo__D__I = (function(x) {
  return this.rawToInt__D__I(x)
});
$c_RTLong$.prototype.unsignedSafeDoubleHi__D__I = (function(x) {
  return this.rawToInt__D__I((x / 4.294967296E9))
});
$c_RTLong$.prototype.asUint__I__D = (function(x) {
  return $uD((x >>> 0))
});
$c_RTLong$.prototype.rawToInt__D__I = (function(x) {
  return $uI((x | 0))
});
$c_RTLong$.prototype.isPowerOfTwo_IKnowItsNot0__I__Z = (function(i) {
  return ((i & ((i - 1) | 0)) === 0)
});
$c_RTLong$.prototype.log2OfPowerOfTwo__I__I = (function(i) {
  return ((31 - $s_jl_Integer__numberOfLeadingZeros__I__I(i)) | 0)
});
$c_RTLong$.prototype.inlineNumberOfLeadingZeros__I__I__I = (function(lo, hi) {
  return ((hi !== 0) ? $s_jl_Integer__numberOfLeadingZeros__I__I(hi) : (($s_jl_Integer__numberOfLeadingZeros__I__I(lo) + 32) | 0))
});
$c_RTLong$.prototype.inlineUnsigned_$greater$eq__I__I__I__I__Z = (function(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? this.inlineUnsignedInt_$greater$eq__I__I__Z(alo, blo) : this.inlineUnsignedInt_$greater$eq__I__I__Z(ahi, bhi))
});
$c_RTLong$.prototype.inlineUnsignedInt_$less__I__I__Z = (function(a, b) {
  return ((a ^ (-2147483648)) < (b ^ (-2147483648)))
});
$c_RTLong$.prototype.inlineUnsignedInt_$greater__I__I__Z = (function(a, b) {
  return ((a ^ (-2147483648)) > (b ^ (-2147483648)))
});
$c_RTLong$.prototype.inlineUnsignedInt_$greater$eq__I__I__Z = (function(a, b) {
  return ((a ^ (-2147483648)) >= (b ^ (-2147483648)))
});
$c_RTLong$.prototype.inline_lo_unary_$minus__I__I = (function(lo) {
  return ((-lo) | 0)
});
$c_RTLong$.prototype.inline_hi_unary_$minus__I__I__I = (function(lo, hi) {
  return ((lo !== 0) ? (~hi) : ((-hi) | 0))
});
$c_RTLong$.prototype.inline_abs__I__I__RTLong = (function(lo, hi) {
  return ((hi < 0) ? new $c_RTLong(this.inline_lo_unary_$minus__I__I(lo), this.inline_hi_unary_$minus__I__I__I(lo, hi)) : new $c_RTLong(lo, hi))
});
var $d_RTLong$ = new $TypeData().initClass({
  RTLong$: 0
}, false, "org.scalajs.linker.runtime.RuntimeLong$", {
  RTLong$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_RTLong$.prototype.$classData = $d_RTLong$;
var $n_RTLong$ = (void 0);
function $m_RTLong$() {
  if ((!$n_RTLong$)) {
    $n_RTLong$ = new $c_RTLong$()
  };
  return $n_RTLong$
}
function $f_jl_Boolean__booleanValue__Z($thiz) {
  return $uZ($thiz)
}
function $f_jl_Boolean__hashCode__I($thiz) {
  return ($f_jl_Boolean__booleanValue__Z($thiz) ? 1231 : 1237)
}
function $f_jl_Boolean__toString__T($thiz) {
  return $m_jl_Boolean$().toString__Z__T($f_jl_Boolean__booleanValue__Z($thiz))
}
var $d_jl_Boolean = new $TypeData().initClass({
  jl_Boolean: 0
}, false, "java.lang.Boolean", {
  jl_Boolean: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), (function(x) {
  return ((typeof x) === "boolean")
}));
function $f_jl_Character__charValue__C($thiz) {
  return $uC($thiz)
}
function $f_jl_Character__hashCode__I($thiz) {
  return $f_jl_Character__charValue__C($thiz)
}
function $f_jl_Character__toString__T($thiz) {
  return $m_jl_Character$().toString__C__T($f_jl_Character__charValue__C($thiz))
}
var $d_jl_Character = new $TypeData().initClass({
  jl_Character: 0
}, false, "java.lang.Character", {
  jl_Character: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), (function(x) {
  return (x instanceof $Char)
}));
function $ct_jl_Error__T__jl_Throwable__Z__Z__($thiz, s, e, enableSuppression, writableStackTrace) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, e, enableSuppression, writableStackTrace);
  return $thiz
}
function $ct_jl_Error__T__jl_Throwable__($thiz, message, cause) {
  $ct_jl_Error__T__jl_Throwable__Z__Z__($thiz, message, cause, true, true);
  return $thiz
}
/** @constructor */
function $c_jl_Error() {
  this.jl_Throwable__f_s = null;
  this.jl_Throwable__f_e = null;
  this.jl_Throwable__f_enableSuppression = false;
  this.jl_Throwable__f_writableStackTrace = false;
  this.jl_Throwable__f_stackTraceStateInternal = null;
  this.jl_Throwable__f_stackTrace = null;
  this.jl_Throwable__f_suppressed = null
}
$c_jl_Error.prototype = new $h_jl_Throwable();
$c_jl_Error.prototype.constructor = $c_jl_Error;
/** @constructor */
function $h_jl_Error() {
  /*<skip>*/
}
$h_jl_Error.prototype = $c_jl_Error.prototype;
function $ct_jl_Exception__T__jl_Throwable__Z__Z__($thiz, s, e, enableSuppression, writableStackTrace) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, e, enableSuppression, writableStackTrace);
  return $thiz
}
/** @constructor */
function $c_jl_Exception() {
  this.jl_Throwable__f_s = null;
  this.jl_Throwable__f_e = null;
  this.jl_Throwable__f_enableSuppression = false;
  this.jl_Throwable__f_writableStackTrace = false;
  this.jl_Throwable__f_stackTraceStateInternal = null;
  this.jl_Throwable__f_stackTrace = null;
  this.jl_Throwable__f_suppressed = null
}
$c_jl_Exception.prototype = new $h_jl_Throwable();
$c_jl_Exception.prototype.constructor = $c_jl_Exception;
/** @constructor */
function $h_jl_Exception() {
  /*<skip>*/
}
$h_jl_Exception.prototype = $c_jl_Exception.prototype;
function $f_jl_Byte__byteValue__B($thiz) {
  return $uB($thiz)
}
function $f_jl_Byte__hashCode__I($thiz) {
  return $f_jl_Byte__byteValue__B($thiz)
}
function $f_jl_Byte__toString__T($thiz) {
  return $m_jl_Byte$().toString__B__T($f_jl_Byte__byteValue__B($thiz))
}
var $d_jl_Byte = new $TypeData().initClass({
  jl_Byte: 0
}, false, "java.lang.Byte", {
  jl_Byte: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), (function(x) {
  return $isByte(x)
}));
function $f_jl_Double__doubleValue__D($thiz) {
  return $uD($thiz)
}
function $f_jl_Double__hashCode__I($thiz) {
  return $m_jl_Double$().hashCode__D__I($f_jl_Double__doubleValue__D($thiz))
}
function $f_jl_Double__toString__T($thiz) {
  return $m_jl_Double$().toString__D__T($f_jl_Double__doubleValue__D($thiz))
}
var $d_jl_Double = new $TypeData().initClass({
  jl_Double: 0
}, false, "java.lang.Double", {
  jl_Double: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), (function(x) {
  return ((typeof x) === "number")
}));
function $f_jl_Float__floatValue__F($thiz) {
  return $uF($thiz)
}
function $f_jl_Float__hashCode__I($thiz) {
  return $m_jl_Float$().hashCode__F__I($f_jl_Float__floatValue__F($thiz))
}
function $f_jl_Float__toString__T($thiz) {
  return $m_jl_Float$().toString__F__T($f_jl_Float__floatValue__F($thiz))
}
var $d_jl_Float = new $TypeData().initClass({
  jl_Float: 0
}, false, "java.lang.Float", {
  jl_Float: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), (function(x) {
  return ((typeof x) === "number")
}));
function $s_jl_Integer__numberOfLeadingZeros__I__I(i) {
  return $m_jl_Integer$().numberOfLeadingZeros__I__I(i)
}
function $f_jl_Integer__intValue__I($thiz) {
  return $uI($thiz)
}
function $f_jl_Integer__hashCode__I($thiz) {
  return $f_jl_Integer__intValue__I($thiz)
}
function $f_jl_Integer__toString__T($thiz) {
  return $m_jl_Integer$().toString__I__T($f_jl_Integer__intValue__I($thiz))
}
var $d_jl_Integer = new $TypeData().initClass({
  jl_Integer: 0
}, false, "java.lang.Integer", {
  jl_Integer: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), (function(x) {
  return $isInt(x)
}));
function $f_jl_Long__longValue__J($thiz) {
  return $uJ($thiz)
}
function $f_jl_Long__hashCode__I($thiz) {
  return $m_jl_Long$().hashCode__J__I($thiz.longValue__J())
}
function $f_jl_Long__toString__T($thiz) {
  return $m_jl_Long$().toString__J__T($thiz.longValue__J())
}
function $as_jl_Long(obj) {
  return (((obj instanceof $c_RTLong) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Long"))
}
function $isArrayOf_jl_Long(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Long)))
}
function $asArrayOf_jl_Long(obj, depth) {
  return (($isArrayOf_jl_Long(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Long;", depth))
}
var $d_jl_Long = new $TypeData().initClass({
  jl_Long: 0
}, false, "java.lang.Long", {
  jl_Long: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), (function(x) {
  return (x instanceof $c_RTLong)
}));
function $ct_jl_RuntimeException__T__jl_Throwable__Z__Z__($thiz, s, e, enableSuppression, writableStackTrace) {
  $ct_jl_Exception__T__jl_Throwable__Z__Z__($thiz, s, e, enableSuppression, writableStackTrace);
  return $thiz
}
function $ct_jl_RuntimeException__T__jl_Throwable__($thiz, message, cause) {
  $ct_jl_RuntimeException__T__jl_Throwable__Z__Z__($thiz, message, cause, true, true);
  return $thiz
}
function $ct_jl_RuntimeException__T__($thiz, s) {
  $ct_jl_RuntimeException__T__jl_Throwable__($thiz, s, null);
  return $thiz
}
/** @constructor */
function $c_jl_RuntimeException() {
  this.jl_Throwable__f_s = null;
  this.jl_Throwable__f_e = null;
  this.jl_Throwable__f_enableSuppression = false;
  this.jl_Throwable__f_writableStackTrace = false;
  this.jl_Throwable__f_stackTraceStateInternal = null;
  this.jl_Throwable__f_stackTrace = null;
  this.jl_Throwable__f_suppressed = null
}
$c_jl_RuntimeException.prototype = new $h_jl_Exception();
$c_jl_RuntimeException.prototype.constructor = $c_jl_RuntimeException;
/** @constructor */
function $h_jl_RuntimeException() {
  /*<skip>*/
}
$h_jl_RuntimeException.prototype = $c_jl_RuntimeException.prototype;
function $f_jl_Short__shortValue__S($thiz) {
  return $uS($thiz)
}
function $f_jl_Short__hashCode__I($thiz) {
  return $f_jl_Short__shortValue__S($thiz)
}
function $f_jl_Short__toString__T($thiz) {
  return $m_jl_Short$().toString__S__T($f_jl_Short__shortValue__S($thiz))
}
var $d_jl_Short = new $TypeData().initClass({
  jl_Short: 0
}, false, "java.lang.Short", {
  jl_Short: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), (function(x) {
  return $isShort(x)
}));
function $f_T__java$lang$_String$$thisString__T($thiz) {
  return $as_T($thiz)
}
function $f_T__charAt__I__C($thiz, index) {
  return (65535 & $uI($thiz.charCodeAt(index)))
}
function $f_T__hashCode__I($thiz) {
  var res = 0;
  var mul = 1;
  var i = (($f_T__length__I($thiz) - 1) | 0);
  while ((i >= 0)) {
    res = ((res + $imul($f_T__charAt__I__C($thiz, i), mul)) | 0);
    mul = $imul(mul, 31);
    i = ((i - 1) | 0)
  };
  return res
}
function $f_T__length__I($thiz) {
  return $uI($thiz.length)
}
function $f_T__toString__T($thiz) {
  return $f_T__java$lang$_String$$thisString__T($thiz)
}
function $as_T(obj) {
  return ((((typeof obj) === "string") || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.String"))
}
function $isArrayOf_T(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.T)))
}
function $asArrayOf_T(obj, depth) {
  return (($isArrayOf_T(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.String;", depth))
}
var $d_T = new $TypeData().initClass({
  T: 0
}, false, "java.lang.String", {
  T: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_CharSequence: 1
}, (void 0), (void 0), (function(x) {
  return ((typeof x) === "string")
}));
function $ct_jl_VirtualMachineError__T__jl_Throwable__($thiz, message, cause) {
  $ct_jl_Error__T__jl_Throwable__($thiz, message, cause);
  return $thiz
}
/** @constructor */
function $c_jl_VirtualMachineError() {
  this.jl_Throwable__f_s = null;
  this.jl_Throwable__f_e = null;
  this.jl_Throwable__f_enableSuppression = false;
  this.jl_Throwable__f_writableStackTrace = false;
  this.jl_Throwable__f_stackTraceStateInternal = null;
  this.jl_Throwable__f_stackTrace = null;
  this.jl_Throwable__f_suppressed = null
}
$c_jl_VirtualMachineError.prototype = new $h_jl_Error();
$c_jl_VirtualMachineError.prototype.constructor = $c_jl_VirtualMachineError;
/** @constructor */
function $h_jl_VirtualMachineError() {
  /*<skip>*/
}
$h_jl_VirtualMachineError.prototype = $c_jl_VirtualMachineError.prototype;
/** @constructor */
function $c_RTLong(lo, hi) {
  this.RTLong__f_lo = 0;
  this.RTLong__f_hi = 0;
  this.RTLong__f_lo = lo;
  this.RTLong__f_hi = hi;
  $ct_jl_Number__(this)
}
$c_RTLong.prototype = new $h_jl_Number();
$c_RTLong.prototype.constructor = $c_RTLong;
/** @constructor */
function $h_RTLong() {
  /*<skip>*/
}
$h_RTLong.prototype = $c_RTLong.prototype;
$c_RTLong.prototype.lo__I = (function() {
  return this.RTLong__f_lo
});
$c_RTLong.prototype.hi__I = (function() {
  return this.RTLong__f_hi
});
$c_RTLong.prototype.equals__O__Z = (function(that) {
  var x1 = that;
  if ((x1 instanceof $c_RTLong)) {
    var x2 = $as_RTLong(x1);
    return this.org$scalajs$linker$runtime$RuntimeLong$$inline_equals__RTLong__Z(x2)
  } else {
    return false
  }
});
$c_RTLong.prototype.hashCode__I = (function() {
  return (this.lo__I() ^ this.hi__I())
});
$c_RTLong.prototype.toString__T = (function() {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T(this.lo__I(), this.hi__I())
});
$c_RTLong.prototype.toByte__B = (function() {
  return ((this.lo__I() << 24) >> 24)
});
$c_RTLong.prototype.toShort__S = (function() {
  return ((this.lo__I() << 16) >> 16)
});
$c_RTLong.prototype.toInt__I = (function() {
  return this.lo__I()
});
$c_RTLong.prototype.toLong__J = (function() {
  return $uJ(this)
});
$c_RTLong.prototype.toFloat__F = (function() {
  return $fround(this.toDouble__D())
});
$c_RTLong.prototype.toDouble__D = (function() {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(this.lo__I(), this.hi__I())
});
$c_RTLong.prototype.byteValue__B = (function() {
  return this.toByte__B()
});
$c_RTLong.prototype.shortValue__S = (function() {
  return this.toShort__S()
});
$c_RTLong.prototype.intValue__I = (function() {
  return this.toInt__I()
});
$c_RTLong.prototype.longValue__J = (function() {
  return this.toLong__J()
});
$c_RTLong.prototype.floatValue__F = (function() {
  return this.toFloat__F()
});
$c_RTLong.prototype.doubleValue__D = (function() {
  return this.toDouble__D()
});
$c_RTLong.prototype.compareTo__RTLong__I = (function(b) {
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I(this.lo__I(), this.hi__I(), b.lo__I(), b.hi__I())
});
$c_RTLong.prototype.compareTo__jl_Long__I = (function(that) {
  return this.compareTo__RTLong__I($as_RTLong(that))
});
$c_RTLong.prototype.org$scalajs$linker$runtime$RuntimeLong$$inline_equals__RTLong__Z = (function(b) {
  return ((this.lo__I() === b.lo__I()) && (this.hi__I() === b.hi__I()))
});
$c_RTLong.prototype.equals__RTLong__Z = (function(b) {
  return this.org$scalajs$linker$runtime$RuntimeLong$$inline_equals__RTLong__Z(b)
});
$c_RTLong.prototype.notEquals__RTLong__Z = (function(b) {
  return (!this.org$scalajs$linker$runtime$RuntimeLong$$inline_equals__RTLong__Z(b))
});
$c_RTLong.prototype.$less__RTLong__Z = (function(b) {
  var ahi = this.hi__I();
  var bhi = b.hi__I();
  return ((ahi === bhi) ? ((this.lo__I() ^ (-2147483648)) < (b.lo__I() ^ (-2147483648))) : (ahi < bhi))
});
$c_RTLong.prototype.$less$eq__RTLong__Z = (function(b) {
  var ahi = this.hi__I();
  var bhi = b.hi__I();
  return ((ahi === bhi) ? ((this.lo__I() ^ (-2147483648)) <= (b.lo__I() ^ (-2147483648))) : (ahi < bhi))
});
$c_RTLong.prototype.$greater__RTLong__Z = (function(b) {
  var ahi = this.hi__I();
  var bhi = b.hi__I();
  return ((ahi === bhi) ? ((this.lo__I() ^ (-2147483648)) > (b.lo__I() ^ (-2147483648))) : (ahi > bhi))
});
$c_RTLong.prototype.$greater$eq__RTLong__Z = (function(b) {
  var ahi = this.hi__I();
  var bhi = b.hi__I();
  return ((ahi === bhi) ? ((this.lo__I() ^ (-2147483648)) >= (b.lo__I() ^ (-2147483648))) : (ahi > bhi))
});
$c_RTLong.prototype.unary_$tilde__RTLong = (function() {
  return new $c_RTLong((~this.lo__I()), (~this.hi__I()))
});
$c_RTLong.prototype.$bar__RTLong__RTLong = (function(b) {
  return new $c_RTLong((this.lo__I() | b.lo__I()), (this.hi__I() | b.hi__I()))
});
$c_RTLong.prototype.$amp__RTLong__RTLong = (function(b) {
  return new $c_RTLong((this.lo__I() & b.lo__I()), (this.hi__I() & b.hi__I()))
});
$c_RTLong.prototype.$up__RTLong__RTLong = (function(b) {
  return new $c_RTLong((this.lo__I() ^ b.lo__I()), (this.hi__I() ^ b.hi__I()))
});
$c_RTLong.prototype.$less$less__I__RTLong = (function(n) {
  return new $c_RTLong((((n & 32) === 0) ? (this.lo__I() << n) : 0), (((n & 32) === 0) ? (((((this.lo__I() >>> 1) | 0) >>> ((31 - n) | 0)) | 0) | (this.hi__I() << n)) : (this.lo__I() << n)))
});
$c_RTLong.prototype.$greater$greater$greater__I__RTLong = (function(n) {
  return new $c_RTLong((((n & 32) === 0) ? (((this.lo__I() >>> n) | 0) | ((this.hi__I() << 1) << ((31 - n) | 0))) : ((this.hi__I() >>> n) | 0)), (((n & 32) === 0) ? ((this.hi__I() >>> n) | 0) : 0))
});
$c_RTLong.prototype.$greater$greater__I__RTLong = (function(n) {
  return new $c_RTLong((((n & 32) === 0) ? (((this.lo__I() >>> n) | 0) | ((this.hi__I() << 1) << ((31 - n) | 0))) : (this.hi__I() >> n)), (((n & 32) === 0) ? (this.hi__I() >> n) : (this.hi__I() >> 31)))
});
$c_RTLong.prototype.unary_$minus__RTLong = (function() {
  var lo = this.lo__I();
  var hi = this.hi__I();
  return new $c_RTLong($m_RTLong$().inline_lo_unary_$minus__I__I(lo), $m_RTLong$().inline_hi_unary_$minus__I__I__I(lo, hi))
});
$c_RTLong.prototype.$plus__RTLong__RTLong = (function(b) {
  var alo = this.lo__I();
  var ahi = this.hi__I();
  var bhi = b.hi__I();
  var lo = ((alo + b.lo__I()) | 0);
  return new $c_RTLong(lo, ($m_RTLong$().inlineUnsignedInt_$less__I__I__Z(lo, alo) ? ((((ahi + bhi) | 0) + 1) | 0) : ((ahi + bhi) | 0)))
});
$c_RTLong.prototype.$minus__RTLong__RTLong = (function(b) {
  var alo = this.lo__I();
  var ahi = this.hi__I();
  var bhi = b.hi__I();
  var lo = ((alo - b.lo__I()) | 0);
  return new $c_RTLong(lo, ($m_RTLong$().inlineUnsignedInt_$greater__I__I__Z(lo, alo) ? ((((ahi - bhi) | 0) - 1) | 0) : ((ahi - bhi) | 0)))
});
$c_RTLong.prototype.$times__RTLong__RTLong = (function(b) {
  var alo = this.lo__I();
  var blo = b.lo__I();
  var a0 = (alo & 65535);
  var a1 = ((alo >>> 16) | 0);
  var b0 = (blo & 65535);
  var b1 = ((blo >>> 16) | 0);
  var a0b0 = $imul(a0, b0);
  var a1b0 = $imul(a1, b0);
  var a0b1 = $imul(a0, b1);
  var lo = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
  var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
  var hi = (((((((($imul(alo, b.hi__I()) + $imul(this.hi__I(), blo)) | 0) + $imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((c1part & 65535) + a1b0) | 0) >>> 16) | 0)) | 0);
  return new $c_RTLong(lo, hi)
});
$c_RTLong.prototype.$div__RTLong__RTLong = (function(b) {
  return $m_RTLong$().divide__RTLong__RTLong__RTLong(this, b)
});
$c_RTLong.prototype.$percent__RTLong__RTLong = (function(b) {
  return $m_RTLong$().remainder__RTLong__RTLong__RTLong(this, b)
});
$c_RTLong.prototype.compareTo__O__I = (function(x$1) {
  return this.compareTo__jl_Long__I($as_jl_Long(x$1))
});
function $as_RTLong(obj) {
  return (((obj instanceof $c_RTLong) || (obj === null)) ? obj : $throwClassCastException(obj, "org.scalajs.linker.runtime.RuntimeLong"))
}
function $isArrayOf_RTLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.RTLong)))
}
function $asArrayOf_RTLong(obj, depth) {
  return (($isArrayOf_RTLong(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lorg.scalajs.linker.runtime.RuntimeLong;", depth))
}
var $d_RTLong = new $TypeData().initClass({
  RTLong: 0
}, false, "org.scalajs.linker.runtime.RuntimeLong", {
  RTLong: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
});
$c_RTLong.prototype.$classData = $d_RTLong;
/** @constructor */
function $c_jl_ArithmeticException(s) {
  this.jl_Throwable__f_s = null;
  this.jl_Throwable__f_e = null;
  this.jl_Throwable__f_enableSuppression = false;
  this.jl_Throwable__f_writableStackTrace = false;
  this.jl_Throwable__f_stackTraceStateInternal = null;
  this.jl_Throwable__f_stackTrace = null;
  this.jl_Throwable__f_suppressed = null;
  $ct_jl_RuntimeException__T__(this, s)
}
$c_jl_ArithmeticException.prototype = new $h_jl_RuntimeException();
$c_jl_ArithmeticException.prototype.constructor = $c_jl_ArithmeticException;
/** @constructor */
function $h_jl_ArithmeticException() {
  /*<skip>*/
}
$h_jl_ArithmeticException.prototype = $c_jl_ArithmeticException.prototype;
var $d_jl_ArithmeticException = new $TypeData().initClass({
  jl_ArithmeticException: 0
}, false, "java.lang.ArithmeticException", {
  jl_ArithmeticException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_ArithmeticException.prototype.$classData = $d_jl_ArithmeticException;
/** @constructor */
function $c_jl_ClassCastException(s) {
  this.jl_Throwable__f_s = null;
  this.jl_Throwable__f_e = null;
  this.jl_Throwable__f_enableSuppression = false;
  this.jl_Throwable__f_writableStackTrace = false;
  this.jl_Throwable__f_stackTraceStateInternal = null;
  this.jl_Throwable__f_stackTrace = null;
  this.jl_Throwable__f_suppressed = null;
  $ct_jl_RuntimeException__T__(this, s)
}
$c_jl_ClassCastException.prototype = new $h_jl_RuntimeException();
$c_jl_ClassCastException.prototype.constructor = $c_jl_ClassCastException;
/** @constructor */
function $h_jl_ClassCastException() {
  /*<skip>*/
}
$h_jl_ClassCastException.prototype = $c_jl_ClassCastException.prototype;
var $d_jl_ClassCastException = new $TypeData().initClass({
  jl_ClassCastException: 0
}, false, "java.lang.ClassCastException", {
  jl_ClassCastException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_ClassCastException.prototype.$classData = $d_jl_ClassCastException;
function $ct_jl_IndexOutOfBoundsException__T__($thiz, s) {
  $ct_jl_RuntimeException__T__($thiz, s);
  return $thiz
}
/** @constructor */
function $c_jl_IndexOutOfBoundsException() {
  this.jl_Throwable__f_s = null;
  this.jl_Throwable__f_e = null;
  this.jl_Throwable__f_enableSuppression = false;
  this.jl_Throwable__f_writableStackTrace = false;
  this.jl_Throwable__f_stackTraceStateInternal = null;
  this.jl_Throwable__f_stackTrace = null;
  this.jl_Throwable__f_suppressed = null
}
$c_jl_IndexOutOfBoundsException.prototype = new $h_jl_RuntimeException();
$c_jl_IndexOutOfBoundsException.prototype.constructor = $c_jl_IndexOutOfBoundsException;
/** @constructor */
function $h_jl_IndexOutOfBoundsException() {
  /*<skip>*/
}
$h_jl_IndexOutOfBoundsException.prototype = $c_jl_IndexOutOfBoundsException.prototype;
function $ct_Lorg_scalajs_linker_runtime_UndefinedBehaviorError__T__jl_Throwable__($thiz, message, cause) {
  $ct_jl_VirtualMachineError__T__jl_Throwable__($thiz, message, cause);
  return $thiz
}
function $ct_Lorg_scalajs_linker_runtime_UndefinedBehaviorError__jl_Throwable__($thiz, cause) {
  $ct_Lorg_scalajs_linker_runtime_UndefinedBehaviorError__T__jl_Throwable__($thiz, ((cause === null) ? null : cause.toString__T()), cause);
  return $thiz
}
/** @constructor */
function $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError() {
  this.jl_Throwable__f_s = null;
  this.jl_Throwable__f_e = null;
  this.jl_Throwable__f_enableSuppression = false;
  this.jl_Throwable__f_writableStackTrace = false;
  this.jl_Throwable__f_stackTraceStateInternal = null;
  this.jl_Throwable__f_stackTrace = null;
  this.jl_Throwable__f_suppressed = null
}
$c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError.prototype = new $h_jl_VirtualMachineError();
$c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError.prototype.constructor = $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError;
/** @constructor */
function $h_Lorg_scalajs_linker_runtime_UndefinedBehaviorError() {
  /*<skip>*/
}
$h_Lorg_scalajs_linker_runtime_UndefinedBehaviorError.prototype = $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError.prototype;
var $d_Lorg_scalajs_linker_runtime_UndefinedBehaviorError = new $TypeData().initClass({
  Lorg_scalajs_linker_runtime_UndefinedBehaviorError: 0
}, false, "org.scalajs.linker.runtime.UndefinedBehaviorError", {
  Lorg_scalajs_linker_runtime_UndefinedBehaviorError: 1,
  jl_VirtualMachineError: 1,
  jl_Error: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError.prototype.$classData = $d_Lorg_scalajs_linker_runtime_UndefinedBehaviorError;
/** @constructor */
function $c_jl_ArrayIndexOutOfBoundsException(s) {
  this.jl_Throwable__f_s = null;
  this.jl_Throwable__f_e = null;
  this.jl_Throwable__f_enableSuppression = false;
  this.jl_Throwable__f_writableStackTrace = false;
  this.jl_Throwable__f_stackTraceStateInternal = null;
  this.jl_Throwable__f_stackTrace = null;
  this.jl_Throwable__f_suppressed = null;
  $ct_jl_IndexOutOfBoundsException__T__(this, s)
}
$c_jl_ArrayIndexOutOfBoundsException.prototype = new $h_jl_IndexOutOfBoundsException();
$c_jl_ArrayIndexOutOfBoundsException.prototype.constructor = $c_jl_ArrayIndexOutOfBoundsException;
/** @constructor */
function $h_jl_ArrayIndexOutOfBoundsException() {
  /*<skip>*/
}
$h_jl_ArrayIndexOutOfBoundsException.prototype = $c_jl_ArrayIndexOutOfBoundsException.prototype;
var $d_jl_ArrayIndexOutOfBoundsException = new $TypeData().initClass({
  jl_ArrayIndexOutOfBoundsException: 0
}, false, "java.lang.ArrayIndexOutOfBoundsException", {
  jl_ArrayIndexOutOfBoundsException: 1,
  jl_IndexOutOfBoundsException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_ArrayIndexOutOfBoundsException.prototype.$classData = $d_jl_ArrayIndexOutOfBoundsException;
$L0 = new $c_RTLong(0, 0);
}).call(this);
