import bind from './bind'
import call from './call'

export default function demethodize (fn, ...args) {
  return bind(call(), undefined, fn, ...args)
}
