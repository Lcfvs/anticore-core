import call from '../Function/call'
import prototype from './prototype'

const method = prototype.toLowerCase

export default function toLowerCase (value) {
  return call(method, value)
}
