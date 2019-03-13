import call from '../function/call'

const method = Array.prototype.filter

export default function filter (array, callback, context) {
  return call(method, array, callback, context)
}
