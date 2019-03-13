const method = Object.assign

export default function assign (value, ...extensions) {
  return method(value, ...extensions)
}
