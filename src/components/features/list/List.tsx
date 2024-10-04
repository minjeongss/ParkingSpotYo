import HomeHeader from '../../layout/HomeHeader'
import SearchRegion from './SearchRegion'
import ListRegion from './ListRegion'
import Line from './Line'
import ListEntireItem from './ListItem'
import ListStar from './ListStar'
import { Container, ListItemContainer } from '../../../styles/ListStyles'
import useParkingInfoStore from '../../../stores/parkingInfoStore'
import useStarStore from '../../../stores/starStore'

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
          ? parkingData?.map(data => (
              <ListEntireItem
                isStar={isStar}
                PKLT_NM={data.PKLT_NM}
                ADDR={data.ADDR}
                PRK_TYPE_NM={data.PRK_TYPE_NM}
                BSC_PRK_CRG={data.BSC_PRK_CRG}
              />
            ))
          : star?.map(data => (
              <ListEntireItem
                isStar={isStar}
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
