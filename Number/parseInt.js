import global from '../global'

const window = global()
const method = window.Number.parseInt

export default function parseInt (value, radix) {
  return method(value, radix)
}
