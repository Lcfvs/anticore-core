import call from '../Function/call'
import prototype from './prototype'

const method = prototype.map

export default function map (array, callback, context) {
  return call(method, array, callback, context)
}
