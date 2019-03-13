import indexOf from '../Array/indexOf'
import isNull from '../null/isNull'
import toLowerCase from '../String/toLowerCase'
import getPrototypeOf from './getPrototypeOf'
import getTypeOf from './getTypeOf'

const constructors = [
  Array,
  Boolean,
  Function,
  Number,
  Object,
  String,
  Symbol
]

export default function getPrimitiveOf (value) {
  if (isNull(value)) {
    return 'null'
  }

  const type = getTypeOf(value)

  if (type !== 'object') {
    return type
  }

  const prototype = getPrototypeOf(value)

  if (isNull(prototype)) {
    return type
  }

  const constructor = prototype.constructor

  if (indexOf(constructors, constructor) > -1) {
    return toLowerCase(constructor.name)
  }

  return getPrimitiveOf(prototype)
}
