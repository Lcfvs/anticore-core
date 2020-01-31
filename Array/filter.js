import call from '../Function/call.js'
import prototype from './prototype.js'

const method = prototype.find

export default function find (array, callback, context) {
  return call(method, array, callback, context)
}
