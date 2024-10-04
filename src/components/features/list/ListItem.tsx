import XIcon from '../../../assets/x.svg?react'
import {
  Container,
  NameText,
  DetailText,
  DetailBtn,
} from '../../../styles/ListItemStyles'
import { ParkingInfo } from '../../../types/api'
import Line from './Line'

interface ListItemProps
  extends Pick<
    ParkingInfo,
    'PKLT_NM' | 'ADDR' | 'PRK_TYPE_NM' | 'BSC_PRK_CRG'
  > {}

const ListItem = ({
  PKLT_NM,
  ADDR,
  PRK_TYPE_NM,
  BSC_PRK_CRG,
}: ListItemProps) => {
  return (
    <div>
      <Container>
        <div>
          <NameText>{PKLT_NM}</NameText>
          <DetailText>
            {ADDR}/ {PRK_TYPE_NM} / 기본요금 {BSC_PRK_CRG}원
          </DetailText>
          <DetailBtn>상세보기</DetailBtn>
        </div>
        <XIcon />
      </Container>
      <Line />
    </div>
  )
}

export default ListItem
