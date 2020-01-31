import construct from '../../Function/construct.js'
import global from '../../global/index.js'

const window = global()
const method = window.EventSource

export default function EventSource (url, config) {
  return construct(new.target, method, url, config)
}
