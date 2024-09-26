import styled from '@emotion/styled'

const Container = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 0 1rem 0',
})
const TypeText = styled.p({
  color: 'rgba(0,0,0,0.54)',
  fontWeight: 'bold',
  fontSize: '20px',
})
const DataText = styled.p({
  color: 'rgba(0,0,0,0.54)',
  fontSize: '20px',
})
const AlignText = ({ type, data }: { type: string; data: string }) => {
  return (
    <Container>
      <TypeText>{type}</TypeText>
      <DataText>{data}</DataText>
    </Container>
  )
}

export default AlignText
