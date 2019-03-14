import call from '../Function/call'
import prototype from './prototype'

const method = prototype.slice

export default function slice (array, start, length) {
  return call(method, array, start, length)
}
