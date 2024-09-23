import styled from '@emotion/styled'
import { useEffect } from 'react'
import { Place, PlacesSearchCallback } from '../../../types/kakao' // 타입 가져오기
import Modal from '../modal/Modal'

const MapContainer = styled.div({
  width: '100%', // 너비 설정
  height: '100vh', // 높이 설정
})

const Map = () => {
  useEffect(() => {
    // 지도 정보
    const options = {
      center: new window.kakao.maps.LatLng(37.566826, 126.9786567),
      level: 3,
    }

    const container = document.getElementById('map')
    if (!container) {
      return
    }
    // 지도 생성
    const map = new window.kakao.maps.Map(container, options)

    // 모달 생성
    const infowindow = new window.kakao.maps.InfoWindow({ zIndex: 1 })

    // 마커 생성 함수
    const displayMarker = (place: Place) => {
      // 마커 표시
      const imageSrc = '/src/assets/marker.svg' // 마커이미지의 주소입니다
      const imageSize = new kakao.maps.Size(30, 30) // 마커이미지의 크기입니다
      const imageOption = { offset: new kakao.maps.Point(27, 69) } // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

      const marker = new window.kakao.maps.Marker({
        map,
        position: new window.kakao.maps.LatLng(place.y, place.x),
        image: new window.kakao.maps.MarkerImage(
          imageSrc,
          imageSize,
          imageOption
        ),
      })

      const content = document.createElement('div')
      content.innerHTML = 'TESTTEST!!!!!!!!!'

      const customOverlay = new kakao.maps.CustomOverlay({
        map,
        position: new window.kakao.maps.LatLng(place.y, place.x),
        content: content,
        yAnchor: 1,
      })
      // 마커 이벤트 등록
      window.kakao.maps.event.addListener(marker, 'click', () => {
        infowindow.setContent('<Modal title={place.place_name} />')
        infowindow.open(map, marker)
      })
    }

    // 장소 카테고리 제한 함수
    const placesSearch: PlacesSearchCallback = (data, status) => {
      if (status === window.kakao.maps.services.Status.OK) {
        data.forEach(item => {
          displayMarker(item)
        })
      }
    }

    // 장소 카테고리 제한
    const ps = new window.kakao.maps.services.Places(map)
    ps.categorySearch('PK6', placesSearch, { useMapBounds: true })
  }, [])

  return <MapContainer id="map" />
}

export default Map
