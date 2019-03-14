import global from '../global'

const window = global()
const method = window.Number.isSafeInteger

export default function isSafeInteger (value) {
  return method(value)
}
