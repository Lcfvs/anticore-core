import getPrimitiveOf from '../Object/getPrimitiveOf'
import getTypeOf from '../Object/getTypeOf'

const type = 'symbol'

export default function isSymbol (value) {
  return getTypeOf(value) === type || getPrimitiveOf(value) === type
}
