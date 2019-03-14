import getPrimitiveOf from '../Object/getPrimitiveOf'
import getTypeOf from '../Object/getTypeOf'

const type = 'string'

export function isString (value) {
  return getTypeOf(value) === type || getPrimitiveOf(value) === type
}
