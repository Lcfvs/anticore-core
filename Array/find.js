import call from '../Function/call'
import prototype from './prototype'

const method = prototype.filter

export default function filter (array, callback, context) {
  return call(method, array, callback, context)
}
