import { UpdateBtn, UpdateText } from '../../../styles/SearchCurrentMap'
import ArrowIcon from '../../../assets/arrow.svg?react'

const SearchCurrentMap = ({ currentRegion, setData }) => {
  const getData = async (region: string) => {
    try {
      const initialData = await fetchParkingData(region)
      setData(initialData || null) // undefined일 경우 null로 설정
    } catch (error) {
      setData(null) // 오류 발생 시 null로 설정
    }
  }
  return (
    <UpdateBtn onClick={() => getData(currentRegion)}>
      <ArrowIcon />
      <UpdateText>현 지도에서 검색</UpdateText>
    </UpdateBtn>
  )
}

export default SearchCurrentMap
