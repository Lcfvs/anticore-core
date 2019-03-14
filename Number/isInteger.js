import global from '../global'

const window = global()
const method = window.Number.isInteger

export default function isInteger (value) {
  return method(value)
}
