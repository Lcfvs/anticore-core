import call from '../Function/call'
import prototype from './prototype'

const method = prototype.match

export default function match (value, pattern) {
  return call(method, value, pattern)
}
