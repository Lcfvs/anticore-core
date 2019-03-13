import call from '../function/call'

const method = Array.prototype.join

export default function join (array, interval) {
  return call(method, array, interval)
}
