import call from '../Function/call'
import prototype from './prototype'

const method = prototype.test

export default function toString (pattern, value) {
  return call(method, pattern, value)
}
