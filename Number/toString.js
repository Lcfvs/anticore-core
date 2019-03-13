import call from '../Function/call'
import prototype from './prototype'

const method = prototype.toString

export default function toString (value, radix) {
  return call(method, value, radix)
}
