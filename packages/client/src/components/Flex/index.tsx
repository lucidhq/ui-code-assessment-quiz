/** @jsx jsx */

import * as React from 'react'
import { jsx } from '@emotion/core'
import { flexbox, CONTENT_ENUM } from './styles'

export interface Props {
  children: React.ReactNode
  column?: 'true' | 'false'
  justify?: CONTENT_ENUM
  align?: CONTENT_ENUM
}

export const Flex: React.FC<Props> = ({ children, ...rest }) => (
  <div css={flexbox(rest)} {...rest}>
    {children}
  </div>
)
Flex.displayName = 'FlexBox'
