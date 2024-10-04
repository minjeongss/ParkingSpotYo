import { useNavigate } from 'react-router-dom'
import XIcon from '../../../assets/x.svg?react'
import useStarStore from '../../../stores/starStore'
import {
  Container,
  NameText,
  DetailText,
  DetailBtn,
  ItemContainer,
} from '../../../styles/ListItemStyles'
import Line from './Line'
import { ParkingInfo } from '../../../types/api'

interface ListStarItemProps {
  data: ParkingInfo
}
const ListStarItem = ({ data }: ListStarItemProps) => {
  const deletePartStar = useStarStore(state => state.actions.deletePartStar)
  const navigate = useNavigate()
  return (
    <div>
      <Container>
        <ItemContainer>
          <NameText>{data.PKLT_NM}</NameText>
          <DetailText>
            {data.ADDR}/ {data.PRK_TYPE_NM} / 기본요금 {data.BSC_PRK_CRG}원
          </DetailText>
          <DetailBtn onClick={() => navigate('/detailMap', { state: data })}>
            상세보기
          </DetailBtn>
        </ItemContainer>
        <XIcon onClick={() => deletePartStar(data.LAT, data.LOT)} />
      </Container>
      <Line />
    </div>
  )
}

export default ListStarItem
