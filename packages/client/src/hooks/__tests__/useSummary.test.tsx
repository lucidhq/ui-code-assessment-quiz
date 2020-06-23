import * as React from 'react'
import { MockedProvider } from '@apollo/react-testing'
import { renderHook } from '@testing-library/react-hooks'
import { useSummary, SUMMARY_QUERY } from '../useSummary'

describe('useSummary custom hook', () => {
  const summaryQueryHook = {
    request: {
      query: SUMMARY_QUERY,
    },
    result: {
      data: {
        getSummary: {
          finalScore: '100%',
          correctAnswers: 10,
          incorrectAnswers: 0,
          totalQuestionsAnswered: 10,
        },
      },
    },
  }

  function getHookWrapper(mocks: any[] = []) {
    const wrapper = ({ children }: any) => (
      <MockedProvider mocks={mocks} addTypename={false}>
        {children}
      </MockedProvider>
    )
    const { result, waitForNextUpdate } = renderHook(() => useSummary(), {
      wrapper,
    })

    expect(result.current.loading).toBeTruthy()
    expect(result.current.error).toBeUndefined()
    expect(result.current.data?.getSummary).toBeUndefined()

    return { result, waitForNextUpdate }
  }

  it('should return an object with the summary', async () => {
    const { result, waitForNextUpdate } = getHookWrapper([summaryQueryHook])

    await waitForNextUpdate()

    expect(result.current.loading).toBeFalsy()
    expect(result.current.error).toBeUndefined()
    expect(result.current.data?.getSummary).toEqual({
      finalScore: '100%',
      correctAnswers: 10,
      incorrectAnswers: 0,
      totalQuestionsAnswered: 10,
    })
  })
})
