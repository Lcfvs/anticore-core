import construct from '../function/construct'

const method = (1).constructor

export default function String (value) {
  return construct(new.target, method, value)
}
