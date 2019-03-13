import call from '../function/call'

const method = String.prototype.match

export default function match (value, pattern) {
  return call(method, value, pattern)
}
