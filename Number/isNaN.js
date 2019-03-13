import global from '../global'

const window = global()
const method = window.Number.isNaN

export default function isNaN (value) {
  return method(value)
}
