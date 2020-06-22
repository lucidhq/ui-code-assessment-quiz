import * as React from 'react'
import { useRandomQuestions } from '../../hooks/useRandomQuestions'
import { useAnswerQuestion } from '../../hooks/useAnswerQuestion'

interface IState {
  type: string | null
  correct: boolean | null
  answer: string
}

const initialState: IState = {
  type: null,
  correct: null,
  answer: '',
}

export const useQuestionHook = (amount: number) => {
  const [count, setCount] = React.useState<number>(0)
  const [state, setState] = React.useState<IState>(initialState)
  const { data, loading, error, refetch } = useRandomQuestions(amount)
  const [answerQuestion] = useAnswerQuestion()

  const handleOnChange = (val: string) => {
    setState({
      type: data.getRandomQuestions[count].type,
      answer: val,
      correct: data.getRandomQuestions[count].correctAnswer === val,
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
