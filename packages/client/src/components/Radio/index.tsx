/** @jsx jsx */

import * as React from 'react'
import { jsx } from '@emotion/core'
import { radio, input } from './styles'

interface IProps {
  name?: string
  text: string
  value: string | string[]
  onChange: (e: React.FormEvent<HTMLInputElement>) => void
  checked: boolean
}

export const Radio: React.FC<IProps> = ({
  name = 'radio',
  text,
  onChange,
  value,
  checked,
}) => {
  return (
    <label css={radio}>
      <input
        css={input}
        type="radio"
        name={name}
        value={value}
        onChange={onChange}
        checked={checked}
      />
      {text}
    </label>
  )
}
