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
  const addStar = useStarStore(state => state.actions.addStar)
  return (
    <Container>
      <button
        type="button"
        onClick={() =>
          addStar({ PKLT_NM: 'A', ADDR: 'A', PRK_TYPE_NM: 'A', BSC_PRK_CRG: 3 })
        }
      >
        테슷트
      </button>
      <HomeHeader />
      <SearchRegion />
      {isStar ? <ListStar /> : <ListRegion />}
      <Line />
      <ListItemContainer>
        {isStar
          ? star?.map(data => (
              <ListStarItem
                key={data.id}
                id={data.id}
                PKLT_NM={data.PKLT_NM}
                ADDR={data.ADDR}
                PRK_TYPE_NM={data.PRK_TYPE_NM}
                BSC_PRK_CRG={data.BSC_PRK_CRG}
              />
            ))
          : parkingData?.map(data => (
              <ListEntireItem
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
