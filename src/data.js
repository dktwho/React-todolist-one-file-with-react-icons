import { nanoid } from "nanoid"

function generateId() {
  return nanoid()
}

const dataTodos = [
  // {
  //  id:  generateId(),
  //  title: 'todo 1',
  //  isComplete: false
  // },
  // {
  //   id:  generateId(),
  //   title: 'todo 2',
  //   isComplete: false
  //  },
]


export {generateId, dataTodos}
