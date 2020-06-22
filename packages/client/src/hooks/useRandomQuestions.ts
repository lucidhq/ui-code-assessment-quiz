import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

const RANDOM_QUESTIONS_QUERY = gql`
  query GetRandom($n: Int) {
    getRandomQuestions(n: $n) {
      question
      type
      answers
      correctAnswer
    }
  }
`

interface IResponse {
  question: string
  type: 'MULTIPLE' | 'TEXT' | 'BOOLEAN'
  answers: string[]
  correctAnswer: string
}

interface IVariable {
  n: number
}

export const useRandomQuestions = (n: number) =>
  useQuery<{ getRandomQuestions: IResponse[] }, IVariable>(
    RANDOM_QUESTIONS_QUERY,
    {
      variables: { n },
    },
  )
