/** @jsx jsx */

import * as React from 'react'
import { jsx } from '@emotion/core'
import { Multiple } from './Multiple'
import { Boolean } from './Boolean'
import { Text } from './Text'

const QuestionType = {
  MULTIPLE: (props: IProps) => <Multiple {...props} />,
  BOOLEAN: (props: IProps) => <Boolean {...props} />,
  TEXT: (props: IProps) => <Text {...props} />,
}

interface IProps {
  type: string
  question: string
  answers: string[]
  value: string
  onChange: (val: string) => void
}

export const Question: React.FC<IProps> = ({ type, ...rest }: any) => {
  // @ts-ignore
  const SpecificQuestion = QuestionType[type]

  return <SpecificQuestion {...rest} />
}
