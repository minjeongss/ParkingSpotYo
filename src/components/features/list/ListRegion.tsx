import useMapStore from '../../../stores/mapStore'
import Text from '../../../styles/ListRegionStyles'

const ListRegion = () => {
  const region = useMapStore(state => state.region)
  return <Text>{region} 근처 주차장이에요.</Text>
}

export default ListRegion
