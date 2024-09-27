import styled from '@emotion/styled'
import { useLocation } from 'react-router-dom'
import Header from '../../layout/Header'
import StaticMap from './StaticMap'
import DetailInfo from './DetailInfo'

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: '880px',
  margin: 'auto',
  border: '2px solid #D9D9D9',
})
const DetailMap = () => {
  const location = useLocation()
  const info = location.state
  console.log(info)
  return (
    <>
      <Header />
      <Container>
        <StaticMap info={info} />
        <DetailInfo info={info} />
      </Container>
    </>
  )
}

export default DetailMap
