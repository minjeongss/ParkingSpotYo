import { UpdateBtn, UpdateText } from '../../../styles/SearchCurrentMap'
import ArrowIcon from '../../../assets/arrow.svg?react'
import fetchParkingData from '../../../services/apiService'

const SearchCurrentMap = ({ currentRegion, setData }) => {
  const getData = async (region: string) => {
    try {
      console.log('click')
      const initialData = await fetchParkingData(region)
      setData(initialData || null) // undefined일 경우 null로 설정
    } catch (error) {
      console.error('Error fetching parking data:', error) // 에러 로그 추가
      setData(null) // 오류 발생 시 null로 설정
    }
  }
  return (
    <UpdateBtn onClick={() => getData('종로구')}>
      <ArrowIcon />
      <UpdateText>현 지도에서 검색</UpdateText>
    </UpdateBtn>
  )
}

export default SearchCurrentMap
