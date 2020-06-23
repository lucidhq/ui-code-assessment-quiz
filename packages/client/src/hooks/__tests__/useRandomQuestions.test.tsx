import * as React from 'react'
import { MockedProvider } from '@apollo/react-testing'
import { renderHook } from '@testing-library/react-hooks'
import {
  useRandomQuestions,
  RANDOM_QUESTIONS_QUERY,
} from '../useRandomQuestions'

describe('useRandomQuestions custom hook', () => {
  const randomQuestionsHook = {
    request: {
      query: RANDOM_QUESTIONS_QUERY,
      variables: {
        n: 10,
      },
    },
    result: {
      data: {
        getRandomQuestions: [
          {
            question: 'What is this?',
            type: 'BOOLEAN',
            answers: ['True', 'False'],
            correctAnswer: 'True',
          },
        ],
      },
    },
  }

  function getHookWrapper(mocks: any[] = []) {
    const wrapper = ({ children }: any) => (
      <MockedProvider mocks={mocks} addTypename={false}>
        {children}
      </MockedProvider>
    )
    const { result, waitForNextUpdate } = renderHook(
      () => useRandomQuestions(10),
      {
        wrapper,
      },
    )

    expect(result.current.loading).toBeTruthy()
    expect(result.current.error).toBeUndefined()
    expect(result.current.data?.getRandomQuestions).toBeUndefined()

    return { result, waitForNextUpdate }
  }

  it('should return an array with random questions', async () => {
    const { result, waitForNextUpdate } = getHookWrapper([randomQuestionsHook])

    await waitForNextUpdate()

    expect(result.current.loading).toBeFalsy()
    expect(result.current.error).toBeUndefined()
    expect(result.current.data?.getRandomQuestions).toEqual([
      {
        question: 'What is this?',
        type: 'BOOLEAN',
        answers: ['True', 'False'],
        correctAnswer: 'True',
      },
    ])
  })
})
