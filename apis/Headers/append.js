import call from '../../Function/call'
import prototype from './prototype'

const method = prototype.append

export default function append (headers, name, value) {
  return call(method, headers, name, value)
}
