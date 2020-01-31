import call from '../Function/call.js'
import prototype from './prototype.js'

const method = prototype.join

export default function join (array, interval) {
  return call(method, array, interval)
}
