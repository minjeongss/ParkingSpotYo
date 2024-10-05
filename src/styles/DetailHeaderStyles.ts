import styled from '@emotion/styled'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1280px;
  padding: 1rem 0 1rem 0;
  margin: auto;
  @media (max-width: 800px) {
    width: calc(100% - 2rem);
  }
`
export const LogoContainer = styled.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '1rem',
})
