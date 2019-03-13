const method = (x => x).constructor('return this').bind(null)

export default function global () {
  return method()
}
