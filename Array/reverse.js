import call from '../Function/call'
import prototype from './prototype'

const method = prototype.reverse

export default function reverse (array) {
  return call(method, array)
}
