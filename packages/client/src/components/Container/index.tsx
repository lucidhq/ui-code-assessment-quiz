/** @jsx jsx */

import * as React from 'react'
import { jsx } from '@emotion/core'
import { container } from './styles'

interface Props {
  children: React.ReactNode
  center?: boolean
  scrollable?: boolean
}

export const Container: React.FC<Props> = ({
  children,
  center = false,
  scrollable = false,
  ...props
}) => (
  <div css={container(center, scrollable)} {...props}>
    {children}
  </div>
)
Container.displayName = 'Container'
