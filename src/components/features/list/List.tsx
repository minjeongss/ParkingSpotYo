import HomeHeader from '../../layout/HomeHeader'
import SearchRegion from './SearchRegion'
import ListRegion from './ListRegion'
import Line from './Line'
import ListItem from './ListItem'
import ListStar from './ListStar'
import { Container, ListItemContainer } from '../../../styles/ListStyles'

const List = () => {
  return (
    <Container>
      <HomeHeader />
      <SearchRegion />
      {/* <ListRegion /> */}
      <ListStar />
      <Line />
      <ListItemContainer>
        <ListItem />
        <Line />
        <ListItem />
        <Line />
        <ListItem />
        <Line />
        <ListItem />
        <Line />
        <ListItem />
        <Line />
        <ListItem />
        <Line />
      </ListItemContainer>
    </Container>
  )
}

export default List
