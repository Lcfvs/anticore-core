import call from '../function/call'

const method = Number.toString()

export default function toString (value, radix) {
  return call(method, value, radix)
}
