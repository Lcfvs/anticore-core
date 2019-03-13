import getTypeOf from '../Object/getTypeOf'

export default function isString (value) {
  return getTypeOf(value) === 'string'
}
