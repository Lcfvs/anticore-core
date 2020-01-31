import has from './has.js'
import set from './set.js'

export default function init (headers, name, value) {
  if (!has(headers, name)) {
    set(headers, name, value)
  }

  return headers
}
