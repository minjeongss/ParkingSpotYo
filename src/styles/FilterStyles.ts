import styled from '@emotion/styled'

const Container = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: 'auto',
  gap: '0.5rem',
  position: 'absolute',
  top: '1rem',
  left: '1rem',
  zIndex: 1000,
  cursor: 'pointer',
})

export default Container
