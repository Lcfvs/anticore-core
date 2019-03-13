import call from './call'
import prototype from './prototype'

const method = prototype.bind

export default function bind (fn, context, ...args) {
  return call(method, fn, context, ...args)
}
