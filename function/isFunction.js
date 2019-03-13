import getTypeOf from '../object/getTypeOf'

export default function isFunction (value) {
  return getTypeOf(value) === 'function'
}
