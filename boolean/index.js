import construct from '../function/construct'

const method = (true).constructor

export default function Boolean (value) {
  return construct(new.target, method, value)
}
