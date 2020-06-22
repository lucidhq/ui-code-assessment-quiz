import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'

const RESET_MUTATION = gql`
  mutation Reset {
    resetQuestion {
      response
    }
  }
`

export const useReset = () => useMutation<{ response: boolean }>(RESET_MUTATION)
