import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import { Place, PlacesSearchCallback } from '../../../types/kakao' // 타입 가져오기
import Modal from '../modal/Modal'

const MapContainer = styled.div({
  width: '100%', // 너비 설정
  height: '100vh', // 높이 설정
})

const Map = () => {
  useEffect(() => {
    const container = document.getElementById('map')
    if (!container) {
      return
    }

    // 지도 정보
    const options = {
      center: new window.kakao.maps.LatLng(37.566826, 126.9786567),
      level: 5,
    }

    // 지도 생성
    const map = new window.kakao.maps.Map(container, options)

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

      // 마커 이벤트 등록
      window.kakao.maps.event.addListener(marker, 'click', () => {
        const position = marker.getPosition()
        const lat = position.getLat()
        const lng = position.getLng()
        setMarkerPosition({ lat, lng }) // 마커 위치 상태 업데이트
        alert(`위치: ${lat}, ${lng}`) // 위치를 알림창으로 표시
      })
      window.kakao.maps.event.addListener(marker, 'mouseout', () => {})
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
