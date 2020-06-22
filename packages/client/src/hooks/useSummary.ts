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

export const useSummary = () => useQuery(SUMMARY_QUERY)
