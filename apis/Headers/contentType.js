import init from './init.js'

export default function contentType (headers, value) {
  return init(headers, 'Content-Type', value)
}

export const urlEncoded = 'x-www-form-urlencoded'
export const formData = 'multipart/form-data'
export const text = 'text/plain'
