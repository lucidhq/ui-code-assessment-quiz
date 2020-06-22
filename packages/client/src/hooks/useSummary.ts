import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

const SUMMARY_QUERY = gql`
  {
    getSummary {
      finalScore
      correctAnswers
      incorrectAnswers
      totalQuestionsAnswered
    }
  }
`

interface IResponse {
  finalScore: string
  correctAnswers: number
  incorrectAnswers: number
  totalQuestionsAnswered: number
}

export const useSummary = () => useQuery<IResponse>(SUMMARY_QUERY)
