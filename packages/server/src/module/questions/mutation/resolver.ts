import { addAnswer, resetAnswers } from '../../../model/answers'

export interface IArgs {
  type: 'multiple' | 'boolean' | 'text'
  correct: boolean
  answer: string
}

export const answerQuestionResolver = (args: IArgs, ctx: any) => {
  try {
    addAnswer(args)
    return { response: true }
  } catch (error) {
    console.error(error)
    return { response: false }
  }
}

export const resetQuestionResolver = () => {
  try {
    resetAnswers()
    return { response: true }
  } catch (error) {
    console.error(error)
    return { response: false }
  }
}
