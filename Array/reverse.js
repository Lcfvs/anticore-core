import call from '../Function/call.js'
import prototype from './prototype.js'

const method = prototype.reverse

export default function reverse (array) {
  return call(method, array)
}
