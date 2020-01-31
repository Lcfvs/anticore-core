import global from '../global/index.js'
import construct from '../Function/construct.js'

const window = global()
const method = window.Boolean

export default function Boolean (value) {
  return construct(new.target, method, value)
}
