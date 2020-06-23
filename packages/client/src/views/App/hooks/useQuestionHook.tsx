import * as React from 'react'
import { useRandomQuestions } from '../../../hooks/useRandomQuestions'
import { useAnswerQuestion } from '../../../hooks/useAnswerQuestion'

type Type = 'MULTIPLE' | 'TEXT' | 'BOOLEAN' | undefined

interface IState {
  type: Type
  correct: boolean | undefined
  answer: string
}

const initialState: IState = {
  type: undefined,
  correct: undefined,
  answer: '',
}

export const useQuestionHook = (amount: number) => {
  const [count, setCount] = React.useState<number>(0)
  const [state, setState] = React.useState<IState>(initialState)
  const { data, loading, error, refetch } = useRandomQuestions(amount)
  const [answerQuestion] = useAnswerQuestion()

  const handleOnChange = (val: string) => {
    const obj = data?.getRandomQuestions[count]
    setState({
      type: obj?.type,
      answer: val,
      correct: obj?.correctAnswer === val,
    })
  }

  const handleOnClickNext = () => {
    setCount(count + 1)
    answerQuestion({
      variables: { ...state },
    })
    setState(initialState)
  }

  const handleRefetch = () => {
    setCount(0)
    refetch()
  }

  return {
    count,
    state,
    data: data?.getRandomQuestions || [],
    loading,
    error,
    handleOnChange,
    handleOnClickNext,
    handleRefetch,
  }
}
