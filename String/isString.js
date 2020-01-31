import getPrimitiveOf from '../Object/getPrimitiveOf.js'
import getTypeOf from '../Object/getTypeOf.js'

const type = 'string'

export default function isString (value) {
  return getTypeOf(value) === type || getPrimitiveOf(value) === type
}
