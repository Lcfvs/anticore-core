import global from '../global'
import construct from './construct'

const window = global()
const method = window.Function

export default function Function (...args) {
  return construct(new.target, method, ...args)
}
