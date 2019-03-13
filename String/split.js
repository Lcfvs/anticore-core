import call from '../Function/call'
import prototype from './prototype'

const method = prototype.split

export default function split (value, pattern) {
  return call(method, value, pattern)
}
