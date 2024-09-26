import styled from '@emotion/styled'
import Header from '../../layout/Header'
import StaticMap from './StaticMap'
import Info from './Info'

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: '880px',
  margin: 'auto',
  border: '2px solid red',
})
const DetailMap = () => {
  return (
    <>
      <Header />
      <Container>
        <StaticMap />
        <Info />
      </Container>
    </>
  )
}

export default DetailMap
