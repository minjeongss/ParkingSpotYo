import { useState } from 'react'
import {
  Container,
  ContentContainer,
  TypeText,
} from '../../../styles/FilterItemStyles'
import CarIcon from './CarIcon'
import MoneyIcon from './MoneyIcon'
import ParkingBuildingIcon from './ParkingBuildingIcon'
import ParkingRoadIcon from './ParkingRoadIcon'
import useParkingInfoStore from '../../../stores/parkingInfoStore'

const FilterItem = ({ index, type }: { index: number; type: string }) => {
  const isClicked = useParkingInfoStore(state => state.isFilter[index])
  const setIsFilter = useParkingInfoStore(state => state.actions.setIsFilter)
  // const [isClicked, setIsClicked] = useState(false)
  // const parkingData = useParkingInfoStore(state => state.parkingData)
  const filterNotFree = useParkingInfoStore(
    state => state.actions.filterNotFree
  )
  const resetNotFree = useParkingInfoStore(state => state.actions.filterNotFree)
  const handleClick = () => {
    const newIsFilter = [...useParkingInfoStore.getState().isFilter]
    newIsFilter[index] = !isClicked // 현재 클릭 상태 토글
    setIsFilter(newIsFilter) // 업데이트된 필터 상태 저장

    if (newIsFilter[index]) {
      if (type === '유료') {
        filterNotFree()
      }
    } else {
      resetNotFree()
    }
  }
  const setIcon = (color: string) => {
    if (type === '유료') {
      return <MoneyIcon color={isClicked ? '#FFFFFF' : color} />
    }
    if (type === '무료') {
      return <MoneyIcon color={isClicked ? '#FFFFFF' : color} />
    }
    if (type === '노상') {
      return <ParkingRoadIcon color={isClicked ? '#FFFFFF' : color} />
    }
    if (type === '노외') {
      return <ParkingBuildingIcon color={isClicked ? '#FFFFFF' : color} />
    }
    return <CarIcon color={isClicked ? '#FFFFFF' : color} />
  }
  const setContainer = (color: string) => {
    return (
      <ContentContainer background={isClicked ? color : '#FFFFFF'}>
        {setIcon(color)}
        <TypeText color={isClicked ? '#FFFFFF' : '#000000'}>{type}</TypeText>
      </ContentContainer>
    )
  }
  const handleIcon = () => {
    if (type === '유료') {
      return setContainer('#FFBC3B')
    }
    if (type === '무료') {
      return setContainer('#3BA1FF')
    }
    if (type === '야간') {
      return setContainer('#B197FC')
    }
    if (type === '노상') {
      return setContainer('#22C8AA')
    }
    if (type === '노외') {
      return setContainer('#2F8B6F')
    }
    return setContainer('#32ADE6')
  }
  return <Container onClick={handleClick}>{handleIcon()}</Container>
}

export default FilterItem
