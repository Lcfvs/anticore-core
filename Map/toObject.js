import isArray from '../array/isArray.js'
import shift from '../array/shift.js'
import forEach from '../Map/forEach.js'
import isNumber from '../number/isNumber.js'
import empty from '../object/empty.js'
import getPrototypeOf from '../object/getPrototypeOf.js'
import replace from '../string/replace.js'
import split from '../string/split.js'

function onKey (value, key) {
  define(this, 'target', value, split(replace(key, /]/g, ''), /[.[]/))
}

function define (context, target, value, keys) {
  let name = shift(keys)
  const parsed = parseInt(name.length ? name : '0', 10)

  if (isNumber(parsed)) {
    if (!isArray(context[target])) {
      context[target] = []
    }

    if (!name.length) {
      name = context[target].length
    }
  } else {
    if (getPrototypeOf(context[target]) !== null) {
      context[target] = empty()
    }
  }

  if (!keys.length) {
    context[target][name] = value

    return
  }

  if (!(name in context[target])) {
    context[target][name] = empty()
  }

  define(context[target], name, value, keys)
}

export default function toObject (map) {
  const context = empty({
    target: empty()
  })

  forEach(map, onKey, context)

  return context.target
}
