import styled from '@emotion/styled'
import MapIcon from '../assets/map.svg?react'

export const Container = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: 'auto',
})
export const LogoContainer = styled.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '1rem',
  margin: '1rem 0 1rem 0',
})
export const TypeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`
export const NonMobileContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  @media (max-width: 800px) {
    display: none;
  }
`
export const StyledMapIcon = styled(MapIcon)({
  display: 'none',
  '@media (max-width: 800px)': {
    display: 'block',
  },
})
export const TypeText = styled.p({
  color: 'rgba(0,0,0,0.54)',
  fontSize: '15px',
})
