import global from '../../global'

const window = global()
const method = window.fetch

export default function fetch (input, init) {
  return method(input, init)
}
