import styled from '@emotion/styled'

const Container = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '0 0 1rem 0',
})
const Text = styled.p({
  color: 'rgba(0,0,0,0.54)',
  fontWeight: 'bold',
  fontSize: '20px',
})
const AlignBoldText = ({ data }: { data: string }) => {
  return (
    <Container>
      <Text>{data}</Text>
    </Container>
  )
}

export default AlignBoldText
