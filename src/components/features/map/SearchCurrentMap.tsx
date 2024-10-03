import { UpdateBtn, UpdateText } from '../../../styles/SearchCurrentMap'
import ArrowIcon from '../../../assets/arrow.svg?react'
import { fetchParkingData } from '../../../services/apiService'
import { ParkingInfo } from '../../../types/api'

interface SearchCurrentMapProps {
  currentRegion: string | null
  setData: (data: ParkingInfo[] | null) => void
}
const SearchCurrentMap = ({
  currentRegion,
  setData,
}: SearchCurrentMapProps) => {
  const getData = async (region: string | null) => {
    if (!region) return
    try {
      const initialData = await fetchParkingData(region)
      setData(initialData || null) // undefined일 경우 null로 설정
    } catch (error) {
      setData(null) // 오류 발생 시 null로 설정
      // eslint-disable-next-line no-console
      console.error('Error fetching parking data:', error) // 에러 로그 추가
    }
  }
  const handleClick = () => {
    // eslint-disable-next-line no-void
    void getData(currentRegion)
  }
  return (
    <UpdateBtn onClick={handleClick}>
      <ArrowIcon />
      <UpdateText>현 지도에서 검색</UpdateText>
    </UpdateBtn>
  )
}

export default SearchCurrentMap
