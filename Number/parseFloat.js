import global from '../global'

const window = global()
const method = window.Number.parseFloat

export default function parseFloat (value) {
  return method(value)
}
