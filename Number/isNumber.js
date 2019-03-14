import getPrimitiveOf from '../Object/getPrimitiveOf'
import getTypeOf from '../Object/getTypeOf'
import isNaN from './isNaN'

const type = 'number'

export default function isNumber (value) {
  return !isNaN(value) &&
    (getTypeOf(value) === type || getPrimitiveOf(value) === type)
}
