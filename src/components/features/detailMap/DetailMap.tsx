import { useLocation } from 'react-router-dom'
import Header from '../../layout/Header'
import StaticMap from './StaticMap'
import DetailInfo from './DetailInfo'
import { Container } from '../../../styles/DetailMapStyles'
import { ParkingInfo } from '../../../types/api'
import useBearStore from '../../../stores/bearStore'

const DetailMap = () => {
  const location = useLocation()
  const info = location.state as ParkingInfo
  const bears = useBearStore(state => state.bears)
  return (
    <>
      <Header />
      <Container>
        <h1>{bears}</h1>
        <StaticMap info={info} />
        <DetailInfo info={info} />
      </Container>
    </>
  )
}

export default DetailMap
