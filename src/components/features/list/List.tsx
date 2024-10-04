import HomeHeader from '../../layout/HomeHeader'
import SearchRegion from './SearchRegion'
import ListRegion from './ListRegion'
import Line from './Line'
import ListItem from './ListItem'
import ListStar from './ListStar'
import { Container, ListItemContainer } from '../../../styles/ListStyles'
import useParkingInfoStore from '../../../stores/parkingInfoStore'

const List = () => {
  const parkingData = useParkingInfoStore(state => state.parkingData)
  return (
    <Container>
      <HomeHeader />
      <SearchRegion />
      <ListRegion />

      {/* <ListStar /> */}
      <Line />
      <ListItemContainer>
        {parkingData?.map(data => (
          <ListItem
            PKLT_NM={data.PKLT_NM}
            ADDR={data.ADDR}
            PRK_TYPE_NM={data.PRK_TYPE_NM}
            BSC_PRK_CRG={data.BSC_PRK_CRG}
          />
        ))}
      </ListItemContainer>
    </Container>
  )
}

export default List
