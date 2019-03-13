import global from '../global'
import construct from '../Function/construct'

const window = global()
const method = window.Object

export default function Object (value) {
  return construct(new.target, method, value)
}
