import call from '../../Function/call.js'
import prototype from './prototype.js'

const method = prototype.has

export default function has (headers, name) {
  return call(method, headers, name)
}
