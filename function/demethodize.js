const method = Function.bind.bind(Function.call)

export default function demethodize (fn, context, ...args) {
  return method(fn, context, ...args)
}
