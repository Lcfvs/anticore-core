import concat from './concat'
import replace from './replace'
import toLowerCase from './toLowerCase'

const pattern = /([A-Z])/g

function format (value) {
  return concat('-', toLowerCase(value))
}

export default function camelToDash (value) {
  return replace(value, pattern, format)
}
