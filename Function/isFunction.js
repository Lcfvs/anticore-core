import getPrimitiveOf from '../Object/getPrimitiveOf'
import getTypeOf from '../Object/getTypeOf'

const type = 'function'

export default function isFunction (value) {
  return getTypeOf(value) === type || getPrimitiveOf(value) === type
}
