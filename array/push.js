import call from '../function/call'

const method = Array.prototype.push

export default function push (array, ...values) {
  return call(method, array, ...values)
}
