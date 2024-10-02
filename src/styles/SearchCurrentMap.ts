import styled from '@emotion/styled'

export const UpdateBtn = styled.button({
  display: 'flex',
  position: 'absolute',
  bottom: '1rem',
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 1000,
  padding: '0.5rem 1rem 0.5rem 1rem',
  borderRadius: '20px',
  border: 'none',
  background: '#FFFFFF',
  boxShadow: '0 4px 4px rgba(0, 0, 0, 0.25)',
  cursor: 'pointer',
})
export const UpdateText = styled.p({
  color: '#0875F5',
  fontWeight: 'bold',
  fontSize: '20px',
})
