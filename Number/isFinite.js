import global from '../global'

const window = global()
const method = window.Number.isFinite

export default function isFinite (value) {
  return method(value)
}
