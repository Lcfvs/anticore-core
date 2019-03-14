import getPrimitiveOf from '../Object/getPrimitiveOf'
import getTypeOf from '../Object/getTypeOf'

const type = 'boolean'

export function isBoolean (value) {
  return getTypeOf(value) === type || getPrimitiveOf(value) === type
}
