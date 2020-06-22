import { css } from '@emotion/core'

export type CONTENT_ENUM =
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'

interface FlexBoxProps {
  column?: 'true' | 'false'
  justify?: CONTENT_ENUM
  align?: CONTENT_ENUM
}

const flexDirColumn = css({
  flexDirection: 'column',
})

const justifyContent = (content: CONTENT_ENUM = 'flex-start') =>
  css({
    justifyContent: `${content}`,
  })

const alignItems = (content: CONTENT_ENUM = 'flex-start') =>
  css({
    alignItems: `${content}`,
  })

export const flexbox = ({ column, justify, align }: FlexBoxProps) =>
  css(
    {
      display: 'flex',
      flexDirection: 'row',
    },
    column && flexDirColumn,
    justifyContent(justify),
    alignItems(align),
  )
