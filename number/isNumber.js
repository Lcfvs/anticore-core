const isNaN = Number.isNaN

export default function isNumber (value) {
  return !isNaN(value)
}
