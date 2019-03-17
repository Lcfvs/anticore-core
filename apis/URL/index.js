import construct from '../../Function/construct'
import global from '../../global'

const window = global()
const method = window.URL

export default function Url (value) {
  return construct(new.target, method, value)
}
