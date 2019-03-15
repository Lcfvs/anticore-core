import call from '../Function/call'
import prototype from './prototype'

const method = prototype.find

export default function find (array, callback, context) {
  return call(method, array, callback, context)
}
