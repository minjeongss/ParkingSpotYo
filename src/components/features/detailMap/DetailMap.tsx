import styled from '@emotion/styled'
import Header from '../../layout/Header'
import StaticMap from './StaticMap'
import DetailInfo from './DetailInfo'

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: '880px',
  margin: 'auto',
  border: '2px solid #D9D9D9',
})
const DetailMap = () => {
  return (
    <>
      <Header />
      <Container>
        <StaticMap />
        <DetailInfo />
      </Container>
    </>
  )
}

export default DetailMap
