import Logo from '../../assets/logo.svg?react'
import PinIcon from '../../assets/pin.svg?react'
import HamIcon from '../../assets/hamburger.svg?react'
import {
  Container,
  LogoContainer,
  NonMobileContainer,
  StyledMapIcon,
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
          <NonMobileContainer>
            <HamIcon />
            <TypeText>리스트</TypeText>
          </NonMobileContainer>
          <StyledMapIcon />
        </TypeContainer>
      ) : (
        <TypeContainer onClick={() => toggleStar(true)}>
          <NonMobileContainer>
            <PinIcon />
            <TypeText>즐겨찾기</TypeText>
          </NonMobileContainer>
        </TypeContainer>
      )}
    </Container>
  )
}

export default HomeHeader
