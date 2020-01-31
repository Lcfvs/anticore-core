import global from '../global/index.js'

const window = global()
const method = window.Number.isFinite

export default function isFinite (value) {
  return method(value)
}
