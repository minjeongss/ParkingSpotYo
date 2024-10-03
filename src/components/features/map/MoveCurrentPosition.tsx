import {
  MoveContainer,
  StyledPositionIcon,
} from '../../../styles/MoveCurrentPositionStyles'
import { MapInstance } from '../../../types/kakao'

interface MoveCurrentPositionProps {
  map: MapInstance | null
}

const MoveCurrentPosition = ({ map }: MoveCurrentPositionProps) => {
  const handleClick = () => {
    // HTML5의 geolocation으로 사용할 수 있는지 확인합니다
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude // 위도
        const lon = position.coords.longitude // 경도

        const locPosition = new window.kakao.maps.LatLng(lat, lon) // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다

        // 마커와 인포윈도우를 표시합니다
        map?.setCenter(locPosition)
      })
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다

      const locPosition = new window.kakao.maps.LatLng(33.450701, 126.570667)
      map?.setCenter(locPosition)
      // displayMarker(locPosition, message)
    }
  }
  return (
    <MoveContainer onClick={handleClick}>
      <StyledPositionIcon />
    </MoveContainer>
  )
}

export default MoveCurrentPosition
