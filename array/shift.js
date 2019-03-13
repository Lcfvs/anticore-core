import call from '../function/call'

const method = Array.prototype.shift

export default function shift (array) {
  return call(method, array)
}
