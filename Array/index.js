import global from '../global'
import construct from '../Function/construct'

const window = global()
const method = window.Array

export default function Array (value) {
  return construct(new.target, method, value)
}
