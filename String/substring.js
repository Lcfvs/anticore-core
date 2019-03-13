import call from '../Function/call'
import prototype from './prototype'

const method = prototype.substring

export default function substring (value, start, length) {
  return call(method, value, start, length)
}
