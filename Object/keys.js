import global from '../global/index.js'

const window = global()
const method = window.Object.keys

export default function keys (value) {
  return method(value)
}
