import FILTER_TYPE from '../../../constants/filterConstants'
import Container from '../../../styles/FilterStyles'
import FilterItem from './FilterItem'

const Filter = () => {
  return (
    <Container>
      {FILTER_TYPE.map((elem, index) => (
        <FilterItem key={elem} index={index} type={elem} />
      ))}
    </Container>
  )
}

export default Filter
