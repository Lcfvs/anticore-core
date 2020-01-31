import call from '../Function/call.js'
import prototype from './prototype.js'

const method = prototype.indexOf

export default function indexOf (array, value) {
  return call(method, array, value)
}
