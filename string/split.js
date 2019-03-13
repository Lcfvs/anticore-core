import call from '../function/call'

const method = String.prototype.split

export default function split (value, pattern) {
  return call(method, value, pattern)
}
