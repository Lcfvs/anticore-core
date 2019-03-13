import getTypeOf from '../Object/getTypeOf'

export default function isFunction (value) {
  return getTypeOf(value) === 'function'
}
