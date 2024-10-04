import { UpdateBtn, UpdateText } from '../../../styles/SearchCurrentMapStyles'
import ArrowIcon from '../../../assets/arrow.svg?react'
import { fetchParkingData } from '../../../services/apiService'
import useMapStore from '../../../stores/mapStore'
import useParkingInfoStore from '../../../stores/parkingInfoStore'

const SearchCurrentMap = () => {
  const setParkingData = useParkingInfoStore(
    state => state.actions.setParkingData
  )
  const region = useMapStore(state => state.region)
  const getData = async (regionProp: string | null) => {
    if (!regionProp) return
    try {
      const initialData = await fetchParkingData(regionProp)
      setParkingData(initialData || null)
    } catch (error) {
      setParkingData(null) // 오류 발생 시 null로 설정
      // eslint-disable-next-line no-console
      console.error('Error fetching parking data:', error)
    }
  }
  const handleClick = () => {
    // eslint-disable-next-line no-void
    void getData(region)
  }
  return (
    <UpdateBtn onClick={handleClick}>
      <ArrowIcon />
      <UpdateText>현 지도에서 검색</UpdateText>
    </UpdateBtn>
  )
}

export default SearchCurrentMap
