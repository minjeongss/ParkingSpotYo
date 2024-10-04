import useStarStore from '../../../stores/starStore'
import { Container, Text, RemoveAllBtn } from '../../../styles/ListStarStyles'

const ListStar = () => {
  const deleteAllStar = useStarStore(state => state.actions.deleteAllStar)
  return (
    <Container>
      <Text>즐겨찾기</Text>
      <RemoveAllBtn onClick={deleteAllStar}>비우기</RemoveAllBtn>
    </Container>
  )
}

export default ListStar
