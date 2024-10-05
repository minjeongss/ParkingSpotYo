import Container from '../../../styles/OpenStarListStyles'
import StarIcon from '../../../assets/yellowStar.svg?react'
import useStarStore from '../../../stores/starStore'

const OpenStarList = () => {
  const toggleStar = useStarStore(state => state.actions.toggleStar)
  return (
    <Container onClick={() => toggleStar(true)}>
      <StarIcon />
    </Container>
  )
}

export default OpenStarList
