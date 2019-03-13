import call from '../Function/call'
import prototype from './prototype'

const method = prototype.toUpperCase

export default function toUpperCase (value) {
  return call(method, value)
}
