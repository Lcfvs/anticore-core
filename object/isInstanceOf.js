import isNull from '../null/isNull'
import isUndefined from '../undefined/isUndefined'
import getPrototypeOf from './getPrototypeOf'
import Object from './'

export default function isInstanceOf (constructor, value) {
  if (isNull(value) || isUndefined(value)) {
    return false
  }

  value = getPrototypeOf(Object(value))

  return value === constructor.prototype || isInstanceOf(constructor, value)
}
