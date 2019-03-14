import isNull from '../null/isNull'
import getTypeOf from './getTypeOf'

export default function isObject (value) {
  return !isNull(value) && getTypeOf(value) === 'object'
}
