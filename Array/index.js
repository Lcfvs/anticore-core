import global from '../global/index.js'
import construct from '../Function/construct.js'

const window = global()
const method = window.Array

export default function Array (value) {
  return construct(new.target, method, value)
}
