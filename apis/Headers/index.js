import construct from '../../Function/construct.js'
import global from '../../global/index.js'

const window = global()
const method = window.Headers

export default function Headers (init) {
  return construct(new.target, method, init)
}
