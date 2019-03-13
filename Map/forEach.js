import call from '../Function/call'
import prototype from './prototype'

const method = prototype.forEach

export default function forEach (map, callback, context) {
  return call(method, map, callback, context)
}
