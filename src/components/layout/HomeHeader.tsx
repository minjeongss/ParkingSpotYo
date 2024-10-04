import Logo from '../../assets/logo.svg?react'
import PinIcon from '../../assets/pin.svg?react'
import HamIcon from '../../assets/hamburger.svg?react'
import {
  Container,
  LogoContainer,
  TypeContainer,
  TypeText,
} from '../../styles/HomeHeaderStyles'
import useStarStore from '../../stores/starStore'

const HomeHeader = () => {
  const isStar = useStarStore(state => state.isStar)
  const { toggleStar } = useStarStore(state => state.actions)
  return (
    <Container>
      <LogoContainer>
        <Logo />
        <h2>주차자리요</h2>
      </LogoContainer>
      {isStar ? (
        <TypeContainer onClick={() => toggleStar(false)}>
          <HamIcon />
          <TypeText>리스트</TypeText>
        </TypeContainer>
      ) : (
        <TypeContainer onClick={() => toggleStar(true)}>
          <PinIcon />
          <TypeText>즐겨찾기</TypeText>
        </TypeContainer>
      )}
    </Container>
  )
}

export default HomeHeader
