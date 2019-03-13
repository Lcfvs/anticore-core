import construct from './construct'

const method = (a => a).constructor

export default function Function (...args) {
  return construct(new.target, method, ...args)
}
