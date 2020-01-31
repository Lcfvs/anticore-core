import call from '../../Function/call.js'
import prototype from './prototype.js'

const method = prototype.append

export default function append (headers, name, value) {
  return call(method, headers, name, value)
}
