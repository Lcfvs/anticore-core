import construct from '../../../Function/construct'
import global from '../../../global'

const window = global()
const method = window.URLSearchParams

export default function Params (value) {
  return construct(new.target, method, value)
}
