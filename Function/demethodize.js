import bind from './bind'
import call from './call'

const method = Function.bind.bind(Function.call)

export default function demethodize (fn, ...args) {
  return method(fn, ...args)
}
