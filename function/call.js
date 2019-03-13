const method = Function.call.bind(Function.call)

export default function call (fn, context, ...args) {
  return method(fn, context, ...args)
}
