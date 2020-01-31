import isNull from '../null/isNull.js'
import getTypeOf from './getTypeOf.js'

export default function isObject (value) {
  return !isNull(value) && getTypeOf(value) === 'object'
}
