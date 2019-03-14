import call from '../Function/call'
import prototype from './prototype'

const method = prototype.splice

export default function splice (array, start, length, ...replacements) {
  return call(method, array, start, length, ...replacements)
}
