import construct from '../function/construct'

const method = ({}).constructor

export default function Object (value) {
  return construct(new.target, method, value)
}
