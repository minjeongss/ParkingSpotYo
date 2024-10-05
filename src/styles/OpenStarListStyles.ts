import styled from '@emotion/styled'

const Container = styled.div`
  opacity: 0;
  position: absolute;
  top: 5rem;
  right: 1rem;
  z-index: 1001;
  background: #ffffff;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 50%;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media (max-width: 800px) {
    opacity: 1;
  }
`
export default Container
