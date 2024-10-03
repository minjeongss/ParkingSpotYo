import styled from '@emotion/styled'

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
export const TypeContainer = styled.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '0.5rem',
  cursor: 'pointer',
})
export const TypeText = styled.p({
  color: 'rgba(0,0,0,0.54)',
  fontSize: '15px',
})
