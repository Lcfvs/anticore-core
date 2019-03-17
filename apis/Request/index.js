import construct from '../../Function/construct'
import global from '../../global'

const window = global()
const method = window.Request

export default function Request (input, init) {
  return construct(new.target, method, input, init)
}
