import call from '../function/call'

const method = String.prototype.toLowerCase

export default function toLowerCase (value) {
  return call(method, value)
}
