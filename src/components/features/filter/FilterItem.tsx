import { useState } from 'react'
import {
  Container,
  ContentContainer,
  TypeText,
} from '../../../styles/FilterItemStyles'
import CarIcon from './CarIcon'
import MoneyIcon from './MoneyIcon'
import MoonIcon from './MoonIcon'
import ParkingBuildingIcon from './ParkingBuildingIcon'
import ParkingRoadIcon from './ParkingRoadIcon'

const FilterItem = ({ type }: { type: string }) => {
  const [isClicked, setIsClicked] = useState(false)
  const handleClick = () => {
    setIsClicked(!isClicked)
  }
  const setIcon = (color: string) => {
    if (type === '유료') {
      return <MoneyIcon color={isClicked ? '#FFFFFF' : color} />
    }
    if (type === '무료') {
      return <MoneyIcon color={isClicked ? '#FFFFFF' : color} />
    }
    if (type === '야간') {
      return <MoonIcon color={isClicked ? '#FFFFFF' : color} />
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
