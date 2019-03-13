import global from '../global'
import construct from '../Function/construct'

const window = global()
const method = window.String

export default function String (value) {
  return construct(new.target, method, value)
}
