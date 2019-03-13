import call from '../function/call'

const method = Array.prototype.map

export default function map (array, callback, context) {
  return call(method, array, callback, context)
}
