import call from '../Function/call'
import prototype from './prototype'

const method = prototype.includes

export default function includes (array, value, key) {
  return call(method, array, value, key)
}
