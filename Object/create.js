import global from '../global'

const window = global()
const method = window.Object.create

export default function create (value, descriptors) {
  return method(value, descriptors)
}
