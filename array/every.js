import call from '../function/call'

const method = Array.prototype.every

export default function every (array, callback, context) {
  return call(method, array, callback, context)
}
