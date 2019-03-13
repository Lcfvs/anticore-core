import call from '../Function/call'
import prototype from './prototype'

const method = prototype.every

export default function every (array, callback, context) {
  return call(method, array, callback, context)
}
