import { v4 as uuidv4 } from 'uuid'
import { MapStore, IAnswer } from '../lib/mapStore'

const ANSWERS: Map<string, IAnswer> = new Map()
const STORE = new MapStore('answers.json')

STORE.createFile()
STORE.read()
  .then((answers) => {
    ANSWERS.clear()
    for (let [id, answer] of answers) {
      ANSWERS.set(id, answer)
    }
  })
  .catch((err) => console.error(err))

export const getAnswers = () => {
  return Array.from(ANSWERS.values())
}

export const addAnswer = async ({ type, correct, answer }: any) => {
  const id = uuidv4()
  const date = Date.now()
  const answerObject = {
    id,
    type,
    correct,
    answer,
    date,
  }

  ANSWERS.set(id, answerObject)
  await STORE.save(ANSWERS)

  return { ...answerObject }
}

export const resetAnswers = () => {
  ANSWERS.clear()
  STORE.reset()
}
