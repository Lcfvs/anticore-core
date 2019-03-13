import call from '../function/call'

const method = String.prototype.toUpperCase

export default function toUpperCase (value) {
  return call(method, value)
}
