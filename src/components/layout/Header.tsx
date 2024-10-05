import { useNavigate } from 'react-router-dom'
import Logo from '../../assets/logo.svg?react'
import MapIcon from '../../assets/map.svg?react'
import { Container, LogoContainer } from '../../styles/DetailHeaderStyles'
import useStarStore from '../../stores/starStore'

const Header = () => {
  const navigate = useNavigate()
  const toggleStar = useStarStore(state => state.actions.toggleStar)
  const handleClick = () => {
    navigate('/')
    toggleStar(false)
  }
  return (
    <Container>
      <LogoContainer>
        <Logo />
        <h2>주차자리요</h2>
      </LogoContainer>
      <MapIcon onClick={handleClick} />
    </Container>
  )
}

export default Header
