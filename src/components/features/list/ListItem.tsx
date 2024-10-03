import styled from '@emotion/styled'
import XIcon from '../../../assets/x.svg?react'

const Container = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '0.5rem',
  margin: 0,
})

const NameText = styled.p({
  color: '#4395F6',
  fontSize: '20px',
})
const DetailText = styled.p({
  color: 'rgba(0,0,0, 0.54)',
  fontSize: '15px',
})
const DetailBtn = styled.button({
  display: 'flex',
  justifyContent: 'flex-start',
  color: '#4395F6',
  fontSize: '13px',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
})
const ListItem = () => {
  return (
    <Container>
      <div>
        <NameText>효원빌딩주차장</NameText>
        <DetailText>서울 송파구 가락동 / 노상 / 기본요금 9000원</DetailText>
        <DetailBtn>상세보기</DetailBtn>
      </div>
      <XIcon />
    </Container>
  )
}

export default ListItem
