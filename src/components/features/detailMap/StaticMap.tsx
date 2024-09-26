import styled from '@emotion/styled'
import { useEffect } from 'react'

const MapContainer = styled.div({
  width: '100%',
  height: '20vh',
})
const StaticMap = () => {
  useEffect(() => {
    const staticMapContainer = document.getElementById('staticMap')
    if (!staticMapContainer) {
      return
    }

    // 이미지 지도에서 마커가 표시될 위치입니다
    const markerPosition = new window.kakao.maps.LatLng(33.450701, 126.570667)

    // 이미지 지도에 표시할 마커입니다
    // 이미지 지도에 표시할 마커는 Object 형태입니다
    const marker = {
      position: markerPosition,
    }
    const staticMapOption = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 3, // 이미지 지도의 확대 레벨
      marker,
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const staticMap = new window.kakao.maps.StaticMap(
      staticMapContainer,
      staticMapOption
    )
  }, [])
  return <MapContainer id="staticMap" />
}

export default StaticMap
