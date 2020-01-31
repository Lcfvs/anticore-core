import call from '../Function/call.js'
import prototype from './prototype.js'

const method = prototype.includes

export default function includes (array, value, key) {
  return call(method, array, value, key)
}
