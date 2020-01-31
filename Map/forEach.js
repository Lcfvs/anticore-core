import call from '../Function/call.js'
import prototype from './prototype.js'

const method = prototype.forEach

export default function forEach (map, callback, context) {
  return call(method, map, callback, context)
}
