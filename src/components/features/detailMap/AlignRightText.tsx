import styled from '@emotion/styled'

const Container = styled.div({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
})
const Text = styled.p({
  color: 'rgba(225, 40, 40, 0.54)',
  fontSize: '20px',
})
const AlignRightText = () => {
  return (
    <Container>
      <Text>* 토요일 무료 / 공휴일 무료</Text>
    </Container>
  )
}

export default AlignRightText
