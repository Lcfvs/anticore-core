import construct from '../../Function/construct.js'
import global from '../../global/index.js'

const window = global()
const method = window.Response

export default function Response (body, init) {
  return construct(new.target, method, body, init)
}
