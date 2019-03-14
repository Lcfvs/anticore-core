import getPrototypeOf from './getPrototypeOf'
import Object from './'
import isObject from './isObject'

export default function isInstanceOf (constructor, value) {
  if (!isObject(value)) {
    return false
  }

  value = getPrototypeOf(Object(value))

  return value === constructor.prototype || isInstanceOf(constructor, value)
}
