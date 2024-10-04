import HomeHeader from '../../layout/HomeHeader'
import SearchRegion from './SearchRegion'
import ListRegion from './ListRegion'
import Line from './Line'
import ListEntireItem from './ListEntireItem'
import ListStar from './ListStar'
import { Container, ListItemContainer } from '../../../styles/ListStyles'
import useParkingInfoStore from '../../../stores/parkingInfoStore'
import useStarStore from '../../../stores/starStore'
import ListStarItem from './ListStarItem'

const List = () => {
  const parkingData = useParkingInfoStore(state => state.parkingData)
  const isStar = useStarStore(state => state.isStar)
  const star = useStarStore(state => state.star)
  return (
    <Container>
      <HomeHeader />
      <SearchRegion />
      {isStar ? <ListStar /> : <ListRegion />}
      <Line />
      <ListItemContainer>
        {isStar
          ? star?.map(data => <ListStarItem key={data.id} data={data} />)
          : parkingData?.map(data => <ListEntireItem data={data} />)}
      </ListItemContainer>
    </Container>
  )
}

export default List
