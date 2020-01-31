import apply from '../Function/apply.js'
import global from '../global/index.js'

const window = global()
const method = window.Array

export default function slot (length) {
  return apply(method, null, {
    length
  })
}
