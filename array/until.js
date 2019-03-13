import call from '../function/call'
import every from './every'

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
