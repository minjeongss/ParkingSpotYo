import { IconContainer, H1 } from '../../../styles/DetailMapStyles'
import StarIcon from '../../../assets/star.svg?react'
import useStarStore from '../../../stores/starStore'
import { ParkingInfo } from '../../../types/api'

interface AlignIconProps {
  info: ParkingInfo
}
const AlignIcon = ({ info }: AlignIconProps) => {
  const deletePartStar = useStarStore(state => state.actions.deletePartStar)
  const addStar = useStarStore(state => state.actions.addStar)
  const handleClick = () => {
    if (true) {
      deletePartStar(info.LAT, info.LOT)
    } else {
      addStar(info)
    }
  }
  return (
    <IconContainer>
      <H1>{info.PKLT_NM}</H1>
      <StarIcon onClick={handleClick} />
    </IconContainer>
  )
}

export default AlignIcon
