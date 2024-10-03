import { useNavigate } from 'react-router-dom'
import Logo from '../../assets/logo.svg?react'
import MapIcon from '../../assets/map.svg?react'
import { Container, LogoContainer } from '../../styles/DetailHeaderStyles'

const Header = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <LogoContainer>
        <Logo />
        <h2>주차자리요</h2>
      </LogoContainer>
      <MapIcon onClick={() => navigate('/')} />
    </Container>
  )
}

export default Header
