import includes from '../../Array/includes'
import curry from '../../Function/curry'
import empty from '../../Object/empty'
import toUpperCase from '../../String/toUpperCase'
import coalesce from 'anticore-utils/coalesce'
import FormData from '../FormData'
import contentType, { urlEncoded } from '../Headers/contentType'
import Url from '../URL'
import toString from '../URL/toString'
import concat from '../URL/Params/concat'
import Request from './index'
import init from './init'

const find = coalesce([null, undefined, ''])
const isEmpty = curry(includes, ['GET', 'HEAD'])

function action (form, hasBody) {
  const action = find(form.action, form.ownerDocument.location.href)

  if (hasBody) {
    return action
  }

  const url = new Url(action)

  url.search = concat(url.search, data(form, true))

  return toString(url)
}

function data (form, hasBody) {
  return hasBody ? new FormData(form) : null
}

export default function fromForm (form, options) {
  const method = find(form.method, 'GET')
  const hasBody = !isEmpty(toUpperCase(method))
  const input = action(form, hasBody)
  const config = init(options)
  const body = data(form, hasBody)

  if (hasBody) {
    contentType(config.headers, find(form.enctype, urlEncoded))
  }

  return new Request(input, empty(config, {body, method}))
}
