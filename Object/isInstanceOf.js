import getPrototypeOf from './getPrototypeOf'
import isObject from './isObject'

export default function isInstanceOf (constructor, value) {
  if (!isObject(value)) {
    return false
  }

  value = getPrototypeOf(value)

  return value === constructor.prototype || isInstanceOf(constructor, value)
}
