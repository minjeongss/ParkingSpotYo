import HomeHeader from '../../layout/HomeHeader'
import SearchRegion from '../search/SearchRegion'
import ListRegion from './ListRegion'
import Line from './Line'
import ListEntireItem from './ListEntireItem'
import ListStar from './ListStar'
import {
  Container,
  InnerContainer,
  ListItemContainer,
  MobileContainer,
} from '../../../styles/ListStyles'
import useParkingInfoStore from '../../../stores/parkingInfoStore'
import useStarStore from '../../../stores/starStore'
import ListStarItem from './ListStarItem'

const List = () => {
  const parkingData = useParkingInfoStore(state => state.parkingData)
  const isStar = useStarStore(state => state.isStar)
  const star = useStarStore(state => state.star)
  return (
    <Container isStar={isStar}>
      <InnerContainer>
        <div>
          <HomeHeader />
          <SearchRegion />
        </div>
        <MobileContainer isStar={isStar}>
          {isStar ? <ListStar /> : <ListRegion />}
          <Line />
          <ListItemContainer>
            {isStar
              ? star?.map(data => (
                  <ListStarItem key={`${data.LAT}-${data.LOT}`} data={data} />
                ))
              : parkingData?.map(data => (
                  <ListEntireItem key={`${data.LAT}-${data.LOT}`} data={data} />
                ))}
          </ListItemContainer>
        </MobileContainer>
      </InnerContainer>
    </Container>
  )
}

export default List
