import call from './call'
import demethodize from './demethodize'

const method = demethodize(Function.bind)

export default function bind (fn, ...args) {
  return call(method, fn, ...args)
}
