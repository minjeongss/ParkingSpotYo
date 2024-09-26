import styled from '@emotion/styled'

const Container = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})
const Text = styled.p({
  color: 'rgba(0,0,0,0.54)',
  fontSize: '18px',
})
const AlignExtraLightText = ({
  type,
  data,
}: {
  type: string
  data: string
}) => {
  return (
    <Container>
      <Text>{type}</Text>
      <Text>{data}</Text>
    </Container>
  )
}

export default AlignExtraLightText
