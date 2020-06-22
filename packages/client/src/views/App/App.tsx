/** @jsx jsx */

import * as React from 'react'
import { jsx } from '@emotion/core'
import { Question, Flex, Button } from '../../components'
import { flex, inner, btn } from './styles'
import { Summary } from '../Summary'
import { useQuestionHook } from './useQuestionHook'

export const App: React.FC = () => {
  const {
    error,
    loading,
    count,
    data,
    state,
    handleOnChange,
    handleOnClickNext,
    handleRefetch,
  } = useQuestionHook(2)

  if (loading) return <div>loading</div>
  if (error) return <div>error</div>

  return (
    <React.Fragment>
      <Flex css={flex} align="center" justify="center" column="true">
        <Flex column="true" css={inner} align="flex-start">
          {count !== data?.length && (
            <React.Fragment>
              <Question
                type={data[count].type}
                question={data[count].question}
                answers={data[count].answers}
                onChange={handleOnChange}
                value={state?.answer}
              />
              <Button
                css={btn}
                onClick={handleOnClickNext}
                disabled={state?.answer === ''}
              >
                Next
              </Button>
            </React.Fragment>
          )}
          {count === data?.length && <Summary refetch={handleRefetch} />}
        </Flex>
      </Flex>
    </React.Fragment>
  )
}
