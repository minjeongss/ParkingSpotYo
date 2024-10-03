import styled from '@emotion/styled'
import Logo from '../../assets/logo.svg?react'
import PinIcon from '../../assets/pin.svg?react'
import HanIcon from '../../assets/hamburger.svg?react'

const Container = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: 'auto',
})
const LogoContainer = styled.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '1rem',
  margin: '1rem 0 1rem 0',
})
const TypeContainer = styled.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '0.5rem',
  cursor: 'pointer',
})
const TypeText = styled.p({
  color: 'rgba(0,0,0,0.54)',
  fontSize: '15px',
})
const HomeHeader = () => {
  return (
    <Container>
      <LogoContainer>
        <Logo />
        <h2>주차자리요</h2>
      </LogoContainer>
      <TypeContainer>
        <HanIcon />
        <TypeText>즐겨찾기</TypeText>
      </TypeContainer>
    </Container>
  )
}

export default HomeHeader
