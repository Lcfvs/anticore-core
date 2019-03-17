import construct from '../../Function/construct'
import global from '../../global'

const window = global()
const method = window.Headers

export default function Headers (init) {
  return construct(new.target, method, init)
}
