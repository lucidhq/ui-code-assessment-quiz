import { css } from '@emotion/core'
import { PositionProperty } from 'csstype'

const centerStyle = css({
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  '@media (max-width: 420px)': {
    width: '100%',
  },
})

const scrollY = css({
  overflowY: 'scroll',
})

export const container = (center: boolean, scrollable: boolean) =>
  css(
    {
      position: <PositionProperty>'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
    },
    center && centerStyle,
    scrollable && scrollY,
  )
