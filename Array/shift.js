import call from '../Function/call'
import prototype from './prototype'

const method = prototype.shift

export default function shift (array) {
  return call(method, array)
}
