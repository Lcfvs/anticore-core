import call from '../Function/call.js'
import prototype from './prototype.js'

const method = prototype.map

export default function map (array, callback, context) {
  return call(method, array, callback, context)
}
