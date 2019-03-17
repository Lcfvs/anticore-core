import init from './init'

export default function xhr (headers) {
  return init(headers, 'X-Requested-With', 'XMLHttpRequest')
}
