import prototype from './prototype.js'

const method = prototype.call.bind(prototype.call)

export default function call (fn, context, ...args) {
  return method(fn, context, ...args)
}
