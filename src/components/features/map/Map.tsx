import styled from '@emotion/styled'
import { useEffect } from 'react'
import {
  MarkerData,
  MapInstance,
  MarkerInstance,
  InfoInstance,
} from '../../../types/kakao'

const MapContainer = styled.div({
  width: '100%', // 너비 설정
  height: '400px', // 높이 설정
})

const Map = () => {
  useEffect(() => {
    /**
     * center: 지도의 중심 좌표
     * level: 지도의 확대 레벨
     * position: 마커의 좌표
     */
    const options = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    }
    const markers: MarkerData[] = [
      {
        title: '카카오',
        content: '<div>카카오</div>',
        latlng: new window.kakao.maps.LatLng(33.450705, 126.570677),
      },
      {
        title: '생태연못',
        content: '<div>카카오</div>',
        latlng: new window.kakao.maps.LatLng(33.450936, 126.569477),
      },
      {
        title: '텃밭',
        content: '<div>카카오</div>',
        latlng: new window.kakao.maps.LatLng(33.450879, 126.56994),
      },
      {
        title: '근린공원',
        content: '<div>카카오</div>',
        latlng: new window.kakao.maps.LatLng(33.451393, 126.570738),
      },
    ]

    const container = document.getElementById('map')
    if (!container) {
      return
    }
    const map = new window.kakao.maps.Map(container, options)
    const mainMarkerPosition = new window.kakao.maps.LatLng(
      33.450701,
      126.570667
    )
    const mainMarker = new window.kakao.maps.Marker({
      position: mainMarkerPosition,
    })
    mainMarker.setMap(map)
    const makeOverListener = (
      targetMap: MapInstance,
      marker: MarkerInstance,
      infowindow: InfoInstance
    ) => {
      return () => {
        infowindow.open(targetMap, marker)
      }
    }
    const makeOutListener = (infowindow: InfoInstance) => {
      return () => {
        infowindow.close()
      }
    }
    markers.forEach(item => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const marker = new window.kakao.maps.Marker({
        map,
        position: item.latlng,
        title: item.title,
      })

      const infowindow = new window.kakao.maps.InfoWindow({
        content: item.content,
      })
      window.kakao.maps.event.addListener(
        marker,
        'mouseover',
        makeOverListener(map, marker, infowindow)
      )
      window.kakao.maps.event.addListener(
        marker,
        'mouseout',
        makeOutListener(infowindow)
      )
    })
  }, [])

  return <MapContainer id="map" />
}

export default Map
