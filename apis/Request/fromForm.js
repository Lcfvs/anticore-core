import indexOf from '../../Array/indexOf.js'
import includes from '../../Array/includes.js'
import shift from '../../Array/shift.js'
import curry from '../../Function/curry.js'
import empty from '../../Object/empty.js'
import toUpperCase from '../../String/toUpperCase.js'
import FormData from '../FormData/index.js'
import contentType, { urlEncoded } from '../Headers/contentType.js'
import Url from '../URL/index.js'
import toString from '../URL/toString.js'
import concat from '../URL/Params/concat.js'
import Request from './index.js'
import init from './init.js'

function match (invalids, ...values) {
  const value = shift(values)

  if (indexOf(invalids, value) === -1) {
    return value
  }

  if (values.length) {
    return match(invalids, ...values)
  }
}

function coalesce (...invalids) {
  return curry(match, invalids)
}

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

const find = coalesce([null, undefined, ''])
const isEmpty = curry(includes, ['GET', 'HEAD'])

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
