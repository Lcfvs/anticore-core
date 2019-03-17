import construct from '../../Function/construct'
import global from '../../global'

const window = global()
const method = window.Response

export default function Response (body, init) {
  return construct(new.target, method, body, init)
}
