import styled from '@emotion/styled'
import { useNavigate } from 'react-router-dom'
import Logo from '../../../public/logo.svg?react'
import MapIcon from '../../assets/map.svg?react'

const Container = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: '1280px',
  padding: '1rem 0 1rem 0',
  margin: 'auto',
})
const LogoContainer = styled.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '1rem',
})
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
