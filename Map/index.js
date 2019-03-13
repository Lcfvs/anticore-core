import global from '../global'
import construct from '../Function/construct'

const window = global()
const method = window.Map

export default function Map (...args) {
  return construct(new.target, method, ...args)
}
