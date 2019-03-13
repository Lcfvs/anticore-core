import global from '../global'

const window = global()
const method = window.Object.assign

export default function assign (value, ...extensions) {
  return method(value, ...extensions)
}
