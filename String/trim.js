import call from '../Function/call'
import prototype from './prototype'

const method = prototype.trim

export default function trim (value) {
  return call(method, value)
}
