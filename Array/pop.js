import call from '../Function/call'
import prototype from './prototype'

const method = prototype.pop

export default function pop (array) {
  return call(method, array)
}
