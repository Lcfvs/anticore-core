import call from '../../Function/call.js'
import prototype from './prototype.js'

const method = prototype.set

export default function set (headers, name, value) {
  call(method, headers, name, value)

  return headers
}
