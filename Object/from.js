import assign from './assign.js'
import create from './create.js'

/**
 * Clones the prototype and assigns the extensions on it
 * @param {object|null} [prototype=null]
 * @param {...object} extensions
 * @return {object&(prototype|null)}
 */
export default function from (prototype = null, ...extensions) {
  return assign(create(prototype), ...extensions)
}
