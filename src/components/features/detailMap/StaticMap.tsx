import { useEffect } from 'react'
import { MapContainer } from '../../../styles/DetailMapStyles'
import { ParkingInfo } from '../../../types/api'

const StaticMap = ({ info }: { info: ParkingInfo }) => {
  useEffect(() => {
    const staticMapContainer = document.getElementById('staticMap')
    if (!staticMapContainer) {
      return
    }

    // 이미지 지도에서 마커가 표시될 위치입니다
    const markerPosition = new window.kakao.maps.LatLng(info.LAT, info.LOT)

    // 이미지 지도에 표시할 마커입니다
    // 이미지 지도에 표시할 마커는 Object 형태입니다
    const marker = {
      position: markerPosition,
    }
    const staticMapOption = {
      center: new window.kakao.maps.LatLng(info.LAT, info.LOT),
      level: 3, // 이미지 지도의 확대 레벨
      marker,
    }

    // eslint-disable-next-line no-new
    new window.kakao.maps.StaticMap(staticMapContainer, staticMapOption)
  }, [info.LAT, info.LOT])
  return <MapContainer id="staticMap" />
}

export default StaticMap
