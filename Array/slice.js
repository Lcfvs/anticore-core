import call from '../Function/call.js'
import prototype from './prototype.js'

const method = prototype.slice

export default function slice (array, start, length) {
  return call(method, array, start, length)
}
