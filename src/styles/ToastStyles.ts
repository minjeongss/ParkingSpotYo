import styled from '@emotion/styled'

const ToastContainer = styled.div<{ background: string }>(({ background }) => ({
  zIndex: 1002,
  position: 'fixed',
  top: '5%',
  right: '5%',
  padding: '10px 50px',
  borderRadius: '1rem',
  background,
  color: '#FFFFFF',
  transition: '0.2s all ease-out',
}))
export default ToastContainer
