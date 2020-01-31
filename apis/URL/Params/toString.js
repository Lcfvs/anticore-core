import call from '../../../Function/call.js'
import prototype from './prototype.js'

const method = prototype.toString

export default function toString (params) {
  return call(method, params)
}
