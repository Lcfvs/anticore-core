import call from '../../Function/call'
import prototype from './prototype'

const method = prototype.toString

export default function toString (params) {
  return call(method, params)
}
