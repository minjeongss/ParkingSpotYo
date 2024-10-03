import styled from '@emotion/styled'

export const Container = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '0.5rem',
  margin: 0,
})
export const NameText = styled.p({
  color: '#4395F6',
  fontSize: '20px',
})
export const DetailText = styled.p({
  color: 'rgba(0,0,0, 0.54)',
  fontSize: '15px',
})
export const DetailBtn = styled.button({
  display: 'flex',
  justifyContent: 'flex-start',
  color: '#4395F6',
  fontSize: '13px',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
})
