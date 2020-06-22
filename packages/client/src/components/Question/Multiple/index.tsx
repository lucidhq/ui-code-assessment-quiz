/** @jsx jsx */

import * as React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { jsx } from '@emotion/core'
import { Flex } from '../../Flex'
import { Radio } from '../../Radio'
import { Paragraph } from '../../Paragraph'

interface IProps {
  question: string
  answers: string[]
  onChange: (val: string) => void
  name?: string
}

export const Multiple: React.FC<IProps> = ({ question, answers, onChange }) => {
  const [state, setState] = React.useState('')
  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    setState(e.currentTarget.value)
    onChange(e.currentTarget.value)
  }

  return (
    <Flex column="true" justify="center">
      <Paragraph question={question} />
      <Flex column="true">
        {answers.map((val: string) => (
          <Radio
            text={val}
            key={uuidv4()}
            onChange={handleOnChange}
            name={val}
            value={val}
            checked={state === val}
          />
        ))}
      </Flex>
    </Flex>
  )
}
