import { css } from '@emotion/core'

export const button = css({
  width: '100%',
  padding: '15px 0px',
  cursor: 'pointer',
  color: '#fff',
  outline: 'none',
  border: 'none',
  backgroundColor: '#4f5df7',
  marginTop: 20,
  fontSize: 18,
  '&:hover': {
    background: 'rgba(42, 70, 96, 0.8)',
  },
  '&:active': {
    background: 'rgba(42, 70, 96, 0.9)',
  },
  '&:disabled': {
    background: '#cccccc',
    color: ' #666666',
    cursor: 'not-allowed',
  },
})
