import styled from '@emotion/styled'
import PositionIcon from '../assets/position.svg?react'

export const MoveContainer = styled.div({
  display: 'flex',
  position: 'absolute',
  bottom: '1rem',
  right: '1rem',
  zIndex: 1000,
  background: '#FFFFFF',
  boxShadow: '0 4px 4px rgba(0, 0, 0, 0.25)',
  borderRadius: '50%',
  padding: '0.5rem',
})
export const StyledPositionIcon = styled(PositionIcon)({
  fill: '#000000',
  width: '30px',
  height: '30px',
  zIndex: 1001,
})
