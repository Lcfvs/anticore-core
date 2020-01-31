import call from '../Function/call.js'
import prototype from './prototype.js'

const method = prototype.filter

export default function filter (array, callback, context) {
  return call(method, array, callback, context)
}
