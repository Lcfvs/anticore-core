import getPrimitiveOf from '../Object/getPrimitiveOf.js'
import getTypeOf from '../Object/getTypeOf.js'
import isNaN from './isNaN.js'

const type = 'number'

export default function isNumber (value) {
  return !isNaN(value) &&
    (getTypeOf(value) === type || getPrimitiveOf(value) === type)
}
