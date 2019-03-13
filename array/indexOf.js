import call from '../function/call'

const method = Array.prototype.indexOf

export default function indexOf (array, value) {
  return call(method, array, value)
}
