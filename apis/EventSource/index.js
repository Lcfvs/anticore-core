import construct from '../../Function/construct'
import global from '../../global'

const window = global()
const method = window.EventSource

export default function EventSource (url, config) {
  return construct(new.target, method, url, config)
}
