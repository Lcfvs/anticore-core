import construct from '../function/construct'

const method = ('').constructor

export default function String (value) {
  return construct(new.target, method, value)
}
