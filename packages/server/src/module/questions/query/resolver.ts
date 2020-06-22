import { results } from '../../../db/data.json'
import { getAnswers } from '../../../model/answers'

export interface IArgs {
  n: number
}

interface IQuestion {
  category: string
  type: string
  difficulty: string
  question: string
  correct_answer: string
  incorrect_answers?: string[] | undefined
}

export const getRandomQuestionsResolver = (
  args: IArgs,
  ctx: any,
): Array<IQuestion> => {
  const newArray: Array<IQuestion> = []
  const { length } = results

  for (let i = 0; i < args.n; i++) {
    const result: IQuestion = results[Math.floor(Math.random() * length)]
    newArray.push(result)
  }

  return newArray
}

interface ISummary {
  totalQuestionsAnswered: number
  correctAnswers: number
  incorrectAnswers: number
  finalScore: string
}

export const getSummaryResolver = (): ISummary => {
  const answers = getAnswers()
  const length = answers.length
  let correctAnswers = 0
  let incorrectAnswers = 0

  answers.map((obj) => {
    if (obj.correct) {
      correctAnswers += 1
    } else {
      incorrectAnswers += 1
    }
  })

  return {
    totalQuestionsAnswered: length,
    correctAnswers,
    incorrectAnswers,
    finalScore: `${Math.round((correctAnswers / length) * 100)}%`,
  }
}
