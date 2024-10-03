import styled from '@emotion/styled'
import List from '../components/features/list/List'
import Map from '../components/features/map/Map'

const HomeContainer = styled.div({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  height: '100vh',
})
const HomePage = () => {
  return (
    <HomeContainer>
      <List />
      <Map />
    </HomeContainer>
  )
}

export default HomePage
