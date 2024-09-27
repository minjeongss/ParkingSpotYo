import { useLocation } from 'react-router-dom'
import Header from '../../layout/Header'
import StaticMap from './StaticMap'
import DetailInfo from './DetailInfo'
import { Container } from '../../../styles/DetailMapStyles'
import { ParkingInfo } from '../../../types/api'

const DetailMap = () => {
  const location = useLocation()
  const info = location.state as ParkingInfo
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
