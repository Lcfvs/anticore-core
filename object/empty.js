import from from './from'

export default function empty (...extensions) {
  return from(null, ...extensions)
}
