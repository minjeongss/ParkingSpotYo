import { useNavigate } from 'react-router-dom'
import {
  Container,
  NameText,
  DetailText,
  DetailBtn,
} from '../../../styles/ListItemStyles'
import { ParkingInfo } from '../../../types/api'
import Line from './Line'

interface ListEntireItemProps {
  data: ParkingInfo // data prop의 타입 정의
}

const ListEntireItem = ({ data }: ListEntireItemProps) => {
  const navigate = useNavigate()
  return (
    <div>
      <Container>
        <div>
          <NameText>{data.PKLT_NM}</NameText>
          <DetailText>
            {data.ADDR}/ {data.PRK_TYPE_NM} / 기본요금 {data.BSC_PRK_CRG}원
          </DetailText>
          <DetailBtn onClick={() => navigate('/detailMap', { state: data })}>
            상세보기
          </DetailBtn>
        </div>
      </Container>
      <Line />
    </div>
  )
}

export default ListEntireItem
