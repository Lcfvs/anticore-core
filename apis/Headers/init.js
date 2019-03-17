import has from './has'
import set from './set'

export default function init (headers, name, value) {
  if (!has(headers, name)) {
    set(headers, name, value)
  }

  return headers
}
