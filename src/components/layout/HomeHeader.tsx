import Logo from '../../assets/logo.svg?react'
import PinIcon from '../../assets/pin.svg?react'
import HamIcon from '../../assets/hamburger.svg?react'
import {
  Container,
  LogoContainer,
  TypeContainer,
  TypeText,
} from '../../styles/HomeHeaderStyles'

const HomeHeader = () => {
  return (
    <Container>
      <LogoContainer>
        <Logo />
        <h2>주차자리요</h2>
      </LogoContainer>
      <TypeContainer>
        <HamIcon />
        <TypeText>리스트</TypeText>
      </TypeContainer>
    </Container>
  )
}

export default HomeHeader
