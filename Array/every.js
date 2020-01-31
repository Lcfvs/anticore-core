import call from '../Function/call.js'
import prototype from './prototype.js'

const method = prototype.every

export default function every (array, callback, context) {
  return call(method, array, callback, context)
}
