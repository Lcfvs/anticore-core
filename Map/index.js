import global from '../global/index.js'
import construct from '../Function/construct.js'

const window = global()
const method = window.Map

export default function Map (...args) {
  return construct(new.target, method, ...args)
}
