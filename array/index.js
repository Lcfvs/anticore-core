import construct from '../function/construct'

const method = ([]).constructor

export default function Array (value) {
  return construct(new.target, method, value)
}
