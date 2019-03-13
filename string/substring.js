import call from '../function/call'

const method = String.prototype.substring

export default function substring (value, start, length) {
  return call(method, value, start, length)
}
