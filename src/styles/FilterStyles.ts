import styled from '@emotion/styled'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  gap: 0.5rem;
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 1001;
  cursor: pointer;
  width: calc(100%-2rem);
  @media (max-width: 800px) {
    white-space: nowrap;
  }
`

export default Container
