import call from '../Function/call'
import prototype from './prototype'

const method = prototype.push

export default function push (array, ...values) {
  return call(method, array, ...values)
}
