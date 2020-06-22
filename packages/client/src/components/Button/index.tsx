/** @jsx jsx */

import * as React from 'react'
import { jsx } from '@emotion/core'
import { button } from './styles'

interface Props {
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
}

export const Button: React.FC<Props> = ({
  children,
  type = 'button',
  ...props
}) => {
  return (
    <button type={type} css={button} {...props}>
      {children}
    </button>
  )
}
Button.displayName = 'Button'
