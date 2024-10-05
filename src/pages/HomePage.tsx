import { useEffect } from 'react'
import styled from '@emotion/styled'
import List from '../components/features/list/List'
import Map from '../components/features/map/Map'
import { getFromLocal } from '../services/localStorageService'
import useStarStore from '../stores/starStore'

const HomeContainer = styled.div({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  height: '100vh',
})
const HomePage = () => {
  const setStar = useStarStore(state => state.actions.setStar)
  useEffect(() => {
    const starList = getFromLocal()
    if (starList) {
      setStar(starList)
    }
  }, [])
  return (
    <HomeContainer>
      <List />
      <Map />
    </HomeContainer>
  )
}

export default HomePage
