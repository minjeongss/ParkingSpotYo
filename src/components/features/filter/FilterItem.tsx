import { Container, TypeText } from '../../../styles/FilterItemStyles'
import CarIcon from './CarIcon'
import MoneyIcon from './MoneyIcon'
import MoonIcon from './MoonIcon'
import ParkingBuildingIcon from './ParkingBuildingIcon'
import ParkingRoadIcon from './ParkingRoadIcon'

const FilterItem = ({ type }: { type: string }) => {
  const handleIcon = () => {
    if (type === '유료') {
      return <MoneyIcon color="#FFBC3B" />
    }
    if (type === '무료') {
      return <MoneyIcon color="#3BA1FF" />
    }
    if (type === '야간') {
      return <MoonIcon color="#B197FC" />
    }
    if (type === '노상') {
      return <ParkingRoadIcon color="#22C8AA" />
    }
    if (type === '노외') {
      return <ParkingBuildingIcon color="#2F8B6F" />
    }
    return <CarIcon color="#32ADE6" />
  }
  return (
    <Container>
      {handleIcon()}
      <TypeText>{type}</TypeText>
    </Container>
  )
}

export default FilterItem
