import global from '../global/index.js'

const window = global()
const method = window.Array.isArray

export default function isArray (value) {
  return method(value)
}
