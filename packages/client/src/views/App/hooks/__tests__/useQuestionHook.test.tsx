import * as React from 'react'
import { MockedProvider } from '@apollo/react-testing'
import { renderHook, act } from '@testing-library/react-hooks'
import { useQuestionHook } from '../useQuestionHook'
import { RANDOM_QUESTIONS_QUERY } from 'client/src/hooks/useRandomQuestions'

describe('useQuestionHook a custom hook', () => {
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
      () => useQuestionHook(10),
      {
        wrapper,
      },
    )

    expect(result.current.loading).toBeTruthy()
    expect(result.current.error).toBeUndefined()
    expect(result.current.count).toBe(0)
    expect(result.current.data).toStrictEqual([])
    expect(result.current.state).toStrictEqual({
      type: undefined,
      correct: undefined,
      answer: '',
    })

    return { result, waitForNextUpdate }
  }

  test('should return an object', async () => {
    const { result, waitForNextUpdate } = getHookWrapper([randomQuestionsHook])

    await waitForNextUpdate()

    expect(result.current.loading).toBeFalsy()
    expect(result.current.error).toBeUndefined()
    expect(result.current.data).toEqual([
      {
        question: 'What is this?',
        type: 'BOOLEAN',
        answers: ['True', 'False'],
        correctAnswer: 'True',
      },
    ])
  })

  test('handlers are functions - [ handleOnChange, handleOnClickNext, handleRefetch]', async () => {
    const { result, waitForNextUpdate } = getHookWrapper([randomQuestionsHook])

    await waitForNextUpdate()

    expect(result.current.handleOnChange).toBeInstanceOf(Function)
    expect(result.current.handleOnClickNext).toBeInstanceOf(Function)
    expect(result.current.handleRefetch).toBeInstanceOf(Function)
  })

  test('handlers called - [handleOnChange]', async () => {
    const { result, waitForNextUpdate } = getHookWrapper([randomQuestionsHook])

    await waitForNextUpdate()

    act(() => result.current.handleOnChange('true'))

    expect(result.current.state).toStrictEqual({
      type: 'BOOLEAN',
      correct: false,
      answer: 'true',
    })
  })
})
