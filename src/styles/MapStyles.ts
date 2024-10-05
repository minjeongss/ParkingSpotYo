import styled from '@emotion/styled'

const MapContainer = styled.div<{ isStar: boolean }>(({ isStar }) => ({
  width: '70%',
  height: '100vh',

  '@media (max-width: 800px)': {
    width: '100%',
    height: '80vh',
    display: isStar ? 'none' : 'block', // isStar에 따라 display 설정
  },
}))

export default MapContainer
