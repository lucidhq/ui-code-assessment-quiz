/** @jsx jsx */

import * as React from 'react'
import { jsx, Global } from '@emotion/core'
import { body } from './styles'
import { Container } from '../Container'

interface Props {
  children: React.ReactNode
}

export const Body: React.FC<Props> = ({ children }) => (
  <React.Fragment>
    <Global styles={body} />
    <Container>{children}</Container>
  </React.Fragment>
)
Body.displayName = 'Body'
