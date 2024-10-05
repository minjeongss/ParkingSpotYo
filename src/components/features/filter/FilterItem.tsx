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
  const {
    setIsFilter,
    filterNotFree,
    filterFree,
    filterNW,
    filterNS,
    filterAbleParking,
  } = useParkingInfoStore(state => state.actions)
  const reset = useParkingInfoStore(state => state.actions.filterNotFree)
  const handleClick = () => {
    const newIsFilter = [...useParkingInfoStore.getState().isFilter]

    // 유료-무료, 노상-노외 성립하지 않도록 설정
    console.log(type)
    if (type === '유료') {
      newIsFilter[1] = false
    }
    if (type === '무료') {
      newIsFilter[0] = false
    }
    if (type === '노상') {
      newIsFilter[3] = false
    }
    if (type === '노외') {
      newIsFilter[2] = false
    }

    newIsFilter[index] = !isClicked // 현재 클릭 상태 토글
    setIsFilter(newIsFilter) // 업데이트된 필터 상태 저장

    if (newIsFilter[index]) {
      if (type === '유료') {
        filterNotFree()
      }
      if (type === '무료') {
        filterFree()
      }
      if (type === '노상') {
        filterNS()
      }
      if (type === '노외') {
        filterNW()
      }
      if (type === '현재 주차 가능') {
        filterAbleParking()
      }
    } else {
      reset()
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
