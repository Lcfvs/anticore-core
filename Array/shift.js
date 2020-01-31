import call from '../Function/call.js'
import prototype from './prototype.js'

const method = prototype.shift

export default function shift (array) {
  return call(method, array)
}
