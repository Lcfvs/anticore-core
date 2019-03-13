const method = Object.getPrototypeOf

export default function getPrototypeOf (value) {
  return method(value)
}
