import { IconContainer, H1 } from '../../../styles/DetailMapStyles'
import YellowStar from '../../../assets/yellowStar.svg?react'
import GrayStar from '../../../assets/grayStar.svg?react'
import useStarStore from '../../../stores/starStore'
import { ParkingInfo } from '../../../types/api'

interface AlignIconProps {
  info: ParkingInfo
}

const AlignIcon = ({ info }: AlignIconProps) => {
  const star = useStarStore(state => state.star)
  const deletePartStar = useStarStore(state => state.actions.deletePartStar)
  const addStar = useStarStore(state => state.actions.addStar)
  const isStar = star?.some(
    item => item.LAT === info.LAT && item.LOT === info.LOT
  )

  const handleClick = () => {
    const isStarNow = useStarStore
      .getState()
      .star?.some(item => item.LAT === info.LAT && item.LOT === info.LOT)
    if (isStarNow) {
      deletePartStar(info.LAT, info.LOT)
    } else {
      addStar(info)
    }
  }
  return (
    <IconContainer>
      <H1>{info.PKLT_NM}</H1>
      {isStar ? (
        <YellowStar onClick={handleClick} />
      ) : (
        <GrayStar onClick={handleClick} />
      )}
    </IconContainer>
  )
}

export default AlignIcon
