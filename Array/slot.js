import apply from '../Function/apply'
import global from '../global'

const window = global()
const method = window.Array

export default function slot (length) {
  return apply(method, null, {
    length
  })
}
