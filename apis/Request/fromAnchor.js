import empty from '../../Object/empty'
import Request from './index'
import init from './init'

export default function fromAnchor (anchor, options) {
  const method = 'GET'
  const input = anchor.href
  const config = init(options)

  return new Request(input, empty(config, {method}))
}
