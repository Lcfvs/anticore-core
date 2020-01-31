import call from './call.js'
import prototype from './prototype.js'

const method = prototype.apply

export default function apply (fn, context, args) {
  return call(method, fn, context, args)
}
