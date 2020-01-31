import construct from '../../Function/construct.js'
import global from '../../global/index.js'

const window = global()
const method = window.URL

export default function Url (value) {
  return construct(new.target, method, value)
}
