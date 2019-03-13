import call from '../Function/call'
import prototype from './prototype'

const method = prototype.concat

export default function concat (value, ...values) {
  return call(method, value, ...values)
}
