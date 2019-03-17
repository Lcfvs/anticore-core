import filter from '../../../Array/filter'
import join from '../../../Array/join'
import toString from './toString'
import Params from './'

function parse (params) {
  const search = toString(params)

  return search.length ? search : false
}

export default function concat (...params) {
  return new Params(join(filter(params, parse), '&'))
}
