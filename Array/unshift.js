import call from '../Function/call'
import prototype from './prototype'

const method = prototype.shift

export default function unshift (array, ...values) {
  return call(method, array, ...values)
}
