/** @jsx jsx */

import * as React from 'react'
import { jsx } from '@emotion/core'
import { Flex } from '../../Flex'
import { Paragraph } from '../../Paragraph'
import { text } from './styles'

interface IProps {
  question: string
  onChange: (val: string) => void
}

export const Text: React.FC<IProps> = ({ question, onChange }) => {
  const [state, setState] = React.useState('')
  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    setState(e.currentTarget.value)
    onChange(e.currentTarget.value)
  }

  return (
    <Flex column="true">
      <Paragraph question={question} />
      <Flex column="true">
        <input css={text} type="text" onChange={handleOnChange} value={state} />
      </Flex>
    </Flex>
  )
}
