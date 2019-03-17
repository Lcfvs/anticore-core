import call from '../../Function/call'
import prototype from './prototype'

const method = prototype.has

export default function has (headers, name) {
  return call(method, headers, name)
}
