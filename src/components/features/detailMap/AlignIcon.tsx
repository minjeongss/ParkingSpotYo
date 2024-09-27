import styled from '@emotion/styled'
import StarIcon from '../../../assets/star.svg?react'

const Container = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '1rem 0 1rem 0',
})
const H1 = styled.h1({
  color: '#0875F5',
  fontWeight: 'bold',
  fontSize: '25px',
})
const AlignIcon = ({ name }: { name: string }) => {
  return (
    <Container>
      <H1>{name}</H1>
      <StarIcon />
    </Container>
  )
}

export default AlignIcon
