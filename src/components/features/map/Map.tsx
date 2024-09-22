import styled from '@emotion/styled'
import { useEffect } from 'react'

const MapContainer = styled.div({
  width: '100%', // 너비 설정
  height: '400px', // 높이 설정
  color: 'orange',
})

const Map = () => {
  useEffect(() => {
    const container = document.getElementById('map')
    if (!container) {
      return
    }

    /**
     * center: 지도의 중심 좌표
     * level: 지도의 확대 레벨
     */
    const options = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const map = new window.kakao.maps.Map(container, options)
  }, [])

  return <MapContainer id="map" />
}

export default Map
