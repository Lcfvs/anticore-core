import call from '../Function/call.js'
import prototype from './prototype.js'

const method = prototype.forEach

export default function forEach (array, callback, context) {
  return call(method, array, callback, context)
}
