import getPrimitiveOf from '../Object/getPrimitiveOf'
import getTypeOf from '../Object/getTypeOf'

const type = 'boolean'

export default function isBoolean (value) {
  return getTypeOf(value) === type || getPrimitiveOf(value) === type
}
