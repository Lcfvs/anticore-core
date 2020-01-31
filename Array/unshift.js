import call from '../Function/call.js'
import prototype from './prototype.js'

const method = prototype.shift

export default function unshift (array, ...values) {
  return call(method, array, ...values)
}
