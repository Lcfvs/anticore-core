import call from '../function/call'

const method = Array.prototype.forEach

export default function forEach (array, callback, context) {
  return call(method, array, callback, context)
}
