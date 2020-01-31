import call from '../Function/call.js'
import every from './every.js'

export default function until (array, callback, context) {
  let result

  every(array, (value, key) => {
    if (call(callback, context, value, key, array)) {
      result = key

      return false
    }

    return true
  })

  return result
}
