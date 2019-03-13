import call from '../Function/call'
import prototype from './prototype'

const method = prototype.join

export default function join (array, interval) {
  return call(method, array, interval)
}
