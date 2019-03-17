import global from '../global'
import bind from './bind'
import curry from './curry'
import demethodize from './demethodize'

const method = demethodize(curry)
const Promise = global().Promise

export default function promise (fn, ...args) {
  return new Promise(method(this, fn, ...args))
}
