import call from '../../Function/call'
import prototype from './prototype'

const method = prototype.set

export default function set (headers, name, value) {
  call(method, headers, name, value)

  return headers
}
