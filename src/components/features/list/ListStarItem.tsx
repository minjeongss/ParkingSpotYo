import XIcon from '../../../assets/x.svg?react'
import useStarStore from '../../../stores/starStore'
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
  > {
  id: number
}

const ListStarItem = ({
  id,
  PKLT_NM,
  ADDR,
  PRK_TYPE_NM,
  BSC_PRK_CRG,
}: ListItemProps) => {
  const deletePartStar = useStarStore(state => state.actions.deletePartStar)
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
        <XIcon onClick={() => deletePartStar(id)} />
      </Container>
      <Line />
    </div>
  )
}

export default ListStarItem
