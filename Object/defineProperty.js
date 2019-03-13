import global from '../global'

const window = global()
const method = window.Object.defineProperty

export default function defineProperty (value, name, descriptor) {
  return method(value, name, descriptor)
}
