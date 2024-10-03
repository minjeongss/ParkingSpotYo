import styled from '@emotion/styled'

const Container = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
})
const Text = styled.p({
  color: '#666666',
  fontWeight: 'bold',
  fontSize: '20px',
})
const RemoveAllBtn = styled.button({
  color: 'rgba(0,0,0,0.54)',
  fontSize: '15px',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
})
const ListStar = () => {
  return (
    <Container>
      <Text>즐겨찾기</Text>
      <RemoveAllBtn>비우기</RemoveAllBtn>
    </Container>
  )
}

export default ListStar
