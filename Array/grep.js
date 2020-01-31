import filter from './filter.js'
import reverse from './reverse.js'

export default function grep (values, callback, invert, thisArg) {
  return filter(invert ? reverse(values) : values, callback, thisArg)
}
