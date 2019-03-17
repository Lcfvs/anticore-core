import empty from '../../Object/empty'
import Headers from '../Headers'
import xhr from '../Headers/xhr'

export default function init (options) {
  const config = empty(options || empty())
  const headers = new Headers(config.headers)

  config.credentials = config.credentials || 'same-origin'
  config.headers = xhr(headers)

  return config
}
