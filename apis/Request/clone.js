import call from '../../Function/call'
import prototype from './prototype'

const method = prototype.clone

export default function clone (request) {
  return call(method, request)
}
