import call from '../function/call'

const method = String.prototype.concat

export default function concat (value, ...args) {
  return call(method, value, ...args)
}
