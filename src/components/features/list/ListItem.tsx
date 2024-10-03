import XIcon from '../../../assets/x.svg?react'
import {
  Container,
  NameText,
  DetailText,
  DetailBtn,
} from '../../../styles/ListItemStyles'

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
