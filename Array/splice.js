import call from '../Function/call.js'
import prototype from './prototype.js'

const method = prototype.splice

export default function splice (array, start, length, ...replacements) {
  return call(method, array, start, length, ...replacements)
}
