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

interface IVariable {
  type: 'MULTIPLE' | 'TEXT' | 'BOOLEAN' | undefined
  correct: boolean | undefined
  answer: string
}

export const useAnswerQuestion = () =>
  useMutation<{ response: boolean }, IVariable>(ANSWER_QUESTION_MUTATION)
