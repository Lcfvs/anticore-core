import getTypeOf from '../object/getTypeOf'

export default function isObject (value) {
  return getTypeOf(value) === 'object'
}
