import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import { Place, PlacesSearchCallback } from '../../../types/kakao'
import Modal from '../modal/Modal'

const MapContainer = styled.div({
  width: '100%',
  height: '100vh',
})

const Map = () => {
  const [markerScreenPosition, setMarkerScreenPosition] = useState<{
    x: number
    y: number
  } | null>(null)
  const [isModal, setIsModal] = useState<boolean>(false)

  useEffect(() => {
    const container = document.getElementById('map')
    if (!container) {
      return
    }

    const options = {
      center: new window.kakao.maps.LatLng(37.566826, 126.9786567),
      level: 3,
    }

    const map = new window.kakao.maps.Map(container, options)

    const displayMarker = (place: Place) => {
      const imageSrc = '/src/assets/marker.svg'
      const imageSize = new window.kakao.maps.Size(30, 30)
      const imageOption = { offset: new window.kakao.maps.Point(15, 30) }

      const marker = new window.kakao.maps.Marker({
        map,
        position: new window.kakao.maps.LatLng(place.y, place.x),
        image: new window.kakao.maps.MarkerImage(
          imageSrc,
          imageSize,
          imageOption
        ),
      })

      // 마커 클릭 이벤트 등록
      window.kakao.maps.event.addListener(marker, 'click', () => {
        const position = marker.getPosition()
        const projection = map.getProjection()
        const point = projection.pointFromCoords(position)

        setMarkerScreenPosition({
          x: point.x,
          y: point.y,
        }) // 화면 좌표 상태 업데이트
        setIsModal(true)
      })
      window.kakao.maps.event.addListener(map, 'click', () => {
        setIsModal(false)
      })
      window.kakao.maps.event.addListener(map, 'dragstart', () => {
        setIsModal(false)
      })
      window.kakao.maps.event.addListener(map, 'zoom_changed', () => {
        const position = marker.getPosition()
        const projection = map.getProjection()
        const point = projection.pointFromCoords(position)

        setMarkerScreenPosition({
          x: point.x,
          y: point.y,
        }) // 화면 좌표 상태 업데이트
        setIsModal(false)
      })
    }

    const placesSearch: PlacesSearchCallback = (data, status) => {
      if (status === window.kakao.maps.services.Status.OK) {
        data.forEach(item => {
          displayMarker(item)
        })
      }
    }

    const ps = new window.kakao.maps.services.Places(map)
    ps.categorySearch('PK6', placesSearch, { useMapBounds: true })
  }, [])

  return (
    <>
      <MapContainer id="map" />
      {isModal && <Modal position={markerScreenPosition} />}
    </>
  )
}

export default Map
