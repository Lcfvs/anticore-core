import global from '../global'
import construct from '../Function/construct'

const window = global()
const method = window.Number

export default function Number (value) {
  return construct(new.target, method, value)
}
