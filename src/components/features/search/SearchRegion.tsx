import { useState } from 'react'
import Input from '../../../styles/SearchRegionStyles'
import useParkingInfoStore from '../../../stores/parkingInfoStore'
import { fetchParkingData } from '../../../services/apiService'
import useMapStore from '../../../stores/mapStore'
import getCenterData from '../../../hooks/getCenterData'
import useStarStore from '../../../stores/starStore'

const SearchRegion = () => {
  const [inputText, setInputText] = useState('')
  const map = useMapStore(state => state.map)
  const setParkingData = useParkingInfoStore(
    state => state.actions.setParkingData
  )
  const toggleStar = useStarStore(state => state.actions.toggleStar)

  const getData = async (region: string) => {
    try {
      const initialData = await fetchParkingData(region)
      setParkingData(initialData || null)
    } catch (error) {
      setParkingData(null)
    }
  }
  const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // eslint-disable-next-line no-void
      void getData(inputText)
      // center 이동
      const locPosition = getCenterData(inputText)
      map?.setCenter(locPosition)
      setInputText('')
      toggleStar(false)
    }
  }
  return (
    <Input
      type="text"
      placeholder="자치구를 입력해주세요 (예) 강남구, 종로구 등"
      value={inputText}
      onChange={e => setInputText(e.target.value)}
      onKeyDown={e => handleSubmit(e)}
    />
  )
}

export default SearchRegion
