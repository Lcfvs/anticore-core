import call from '../Function/call'
import prototype from './prototype'

const method = prototype.hasOwnProperty

export default function hasOwnProperty (value, name) {
  return call(method, value, name)
}
