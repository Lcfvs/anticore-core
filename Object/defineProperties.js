import global from '../global'

const window = global()
const method = window.Object.defineProperties

export default function defineProperties (value, descriptors) {
  return method(value, descriptors)
}
