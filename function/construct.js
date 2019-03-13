export default function construct (target, constructor, ...args) {
  if (target) {
    return new constructor(...args)
  }

  return constructor(...args)
}
