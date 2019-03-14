import replace from './replace'
import toUpperCase from './toUpperCase'

const pattern = /(-[a-z])/g

function format (value) {
  return replace(toUpperCase(value), '-', '')
}

export function dashToCamel (value) {
  return replace(value, pattern, format)
}