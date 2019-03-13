import call from '../function/call'

const method = String.prototype.replace

export default function replace (value, pattern, replacement) {
  return call(method, value, pattern, replacement)
}
