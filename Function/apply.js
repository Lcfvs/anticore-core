import call from './call'
import prototype from './prototype'

const method = prototype.apply

export default function apply (fn, context, args) {
  return call(method, fn, context, args)
}
