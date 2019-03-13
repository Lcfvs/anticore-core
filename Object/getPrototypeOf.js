import global from '../global'

const window = global()
const method = window.Object.getPrototypeOf

export default function getPrototypeOf (value) {
  return method(value)
}
