import call from './call.js'

export default function curry (fn, ...args) {
  return function (...newArgs) {
    return call(fn, this, ...args, ...newArgs)
  }
}
