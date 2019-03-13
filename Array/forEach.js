import call from '../Function/call'
import prototype from './prototype'

const method = prototype.forEach

export default function forEach (array, callback, context) {
  return call(method, array, callback, context)
}
