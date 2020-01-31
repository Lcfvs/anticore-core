import call from '../Function/call.js'
import prototype from './prototype.js'

const method = prototype.hasOwnProperty

export default function hasOwnProperty (value, name) {
  return call(method, value, name)
}
