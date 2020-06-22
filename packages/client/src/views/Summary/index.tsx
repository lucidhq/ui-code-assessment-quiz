/** @jsx jsx */

import * as React from 'react'
import { jsx } from '@emotion/core'
import { useSummary } from 'client/src/hooks/useSummary'
import { Flex, Paragraph, Button } from 'client/src/components'
import { useReset } from 'client/src/hooks/useResetAnswers'

export const Summary: React.FC<{
  refetch: () => void
}> = ({ refetch }) => {
  const { loading, error, data } = useSummary()
  const [reset] = useReset()

  const handleOnClick = () => {
    reset()
    refetch()
  }

  if (loading) return <div>loading</div>
  if (error) return <div>error</div>

  return (
    <Flex column="true">
      <Paragraph question={'Summary'} />
      <div>
        Correct: <strong>{data.getSummary.correctAnswers}</strong>
      </div>
      <div>
        Wrong: <strong>{data.getSummary.incorrectAnswers}</strong>
      </div>
      <div>
        Questions answered:{' '}
        <strong>{data.getSummary.totalQuestionsAnswered}</strong>
      </div>
      <div>
        Final Score: <strong>{data.getSummary.finalScore}</strong>
      </div>
      <Button onClick={handleOnClick}>Restart quiz</Button>
    </Flex>
  )
}
