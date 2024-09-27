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
const AlignRightText = ({ satFree, lhldyFree }) => {
  return (
    <Container>
      <Text>
        * 토요일 {satFree} / 공휴일 {lhldyFree}
      </Text>
    </Container>
  )
}

export default AlignRightText
