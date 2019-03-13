import global from '../global'

const window = global()
const method = window.Object.keys

export default function keys (value) {
  return method(value)
}
