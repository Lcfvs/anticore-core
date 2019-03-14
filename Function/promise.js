import bind from './bind'

export default function promise (fn, ...args) {
  return new Promise(bind(this, fn, ...args))
}
