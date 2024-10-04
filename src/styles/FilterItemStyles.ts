import styled from '@emotion/styled'

export const Container = styled.div({})
export const ContentContainer = styled.div<{ background: string }>(
  ({ background }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 'auto',
    gap: '0.5rem',
    border: 'none',
    borderRadius: '20px',
    padding: '0.5rem 1rem 0.5rem 1rem',
    background,
    boxShadow: '0 4px 4px rgba(0, 0, 0, 0.25);',
    cursor: 'pointer',
  })
)

export const TypeText = styled.p<{ color: string }>(({ color }) => ({
  color,
  fontWeight: 'bold',
  fontSize: '15px',
}))
