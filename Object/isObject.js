import getTypeOf from './getTypeOf'

export default function isObject (value) {
  return getTypeOf(value) === 'object'
}
