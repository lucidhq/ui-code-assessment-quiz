/** @jsx jsx */

import * as React from 'react'
import { jsx } from '@emotion/core'
import { Flex } from '../Flex'
import { text, flex } from './styles'

interface IProps {
  question: string
}

export const Paragraph: React.FC<IProps> = ({ question }) => (
  <Flex css={flex} column="true" justify="flex-start">
    <div
      css={text}
      dangerouslySetInnerHTML={{
        __html: question,
      }}
    />
  </Flex>
)
