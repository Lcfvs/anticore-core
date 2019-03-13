import call from '../Function/call'
import prototype from './prototype'

const method = prototype.replace

export default function replace (value, pattern, replacement) {
  return call(method, value, pattern, replacement)
}
