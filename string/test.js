import call from '../function/call'

const method = RegExp.prototype.test

export default function match (value, pattern) {
  return call(method, pattern, value)
}
