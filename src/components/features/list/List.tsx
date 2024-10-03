import styled from '@emotion/styled'
import HomeHeader from '../../layout/HomeHeader'
import SearchRegion from './SearchRegion'
import ListRegion from './ListRegion'
import Line from './Line'
import ListItem from './ListItem'
import ListStar from './ListStar'

const Container = styled.div({
  width: '30%',
  height: '100vh',
  maxWidth: '400px',
  margin: 'auto',
  //   overflowY: 'scroll',
})
const ListItemContainer = styled.div({
  height: '65vh',
  overflowY: 'scroll',
})
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
