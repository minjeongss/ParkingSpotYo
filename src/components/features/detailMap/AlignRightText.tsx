import { RightContainer, RightText } from '../../../styles/DetailMapStyles'

const AlignRightText = ({ satFree, lhldyFree }) => {
  return (
    <RightContainer>
      <RightText>
        * 토요일 {satFree} / 공휴일 {lhldyFree}
      </RightText>
    </RightContainer>
  )
}

export default AlignRightText
