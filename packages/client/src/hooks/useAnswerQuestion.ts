import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'

const ANSWER_QUESTION_MUTATION = gql`
  mutation AnswerQuestion(
    $type: GraphQLAnswerTypeEnum!
    $correct: Boolean!
    $answer: String!
  ) {
    answerQuestion(type: $type, correct: $correct, answer: $answer) {
      response
    }
  }
`

export const useAnswerQuestion = () => useMutation(ANSWER_QUESTION_MUTATION)
