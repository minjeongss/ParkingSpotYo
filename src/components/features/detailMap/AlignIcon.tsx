import { IconContainer, H1 } from '../../../styles/DetailMapStyles'
import StarIcon from '../../../assets/star.svg?react'

const AlignIcon = ({ name }: { name: string }) => {
  return (
    <IconContainer>
      <H1>{name}</H1>
      <StarIcon />
    </IconContainer>
  )
}

export default AlignIcon
