import call from '../Function/call'
import prototype from './prototype'

const method = prototype.indexOf

export default function indexOf (array, value) {
  return call(method, array, value)
}
