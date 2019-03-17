import construct from '../../Function/construct'
import global from '../../global'

const window = global()
const method = window.FormData

export default function FormData (value) {
  return construct(new.target, method, value)
}
