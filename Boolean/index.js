import global from '../global'
import construct from '../Function/construct'

const window = global()
const method = window.Boolean

export default function Boolean (value) {
  return construct(new.target, method, value)
}
