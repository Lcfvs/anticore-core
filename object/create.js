const method = Object.create

export default function create (value, descriptors) {
  return method(value, descriptors)
}
