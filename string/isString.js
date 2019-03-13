import getTypeOf from '../object/getTypeOf'

export default function isString (value) {
  return getTypeOf(value) === 'string'
}
