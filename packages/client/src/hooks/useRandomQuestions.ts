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

export const useRandomQuestions = (n: number) =>
  useQuery(RANDOM_QUESTIONS_QUERY, { variables: { n } })
