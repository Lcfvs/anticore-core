import empty from '../../Object/empty.js'
import Headers from '../Headers/index.js'
import xhr from '../Headers/xhr.js'

export default function init (options) {
  const config = empty(options || empty())
  const headers = new Headers(config.headers)

  config.credentials = config.credentials || 'same-origin'
  config.headers = xhr(headers)

  return config
}
