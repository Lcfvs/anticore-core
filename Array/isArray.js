import global from '../global'

const window = global()
const method = window.Array.isArray

export default function isArray (value) {
  return method(value)
}
