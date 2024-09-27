import { useEffect, useState } from 'react'
import Modal from '../modal/Modal'
import { fetchParkingData } from '../../../services/apiService'
import { ParkingInfo } from '../../../types/api'
import { MapInstance } from '../../../types/kakao'
import MapContainer from '../../../styles/MapStyles'

const Map = () => {
  const [markerScreenPosition, setMarkerScreenPosition] = useState<{
    x: number
    y: number
  } | null>(null)
  const [isModal, setIsModal] = useState<boolean>(false)
  const [data, setData] = useState<ParkingInfo[] | null>(null)
  const [map, setMap] = useState<MapInstance | null>(null) // map 상태 추가
  const [info, setInfo] = useState<ParkingInfo | null>(null)

  useEffect(() => {
    const container = document.getElementById('map')
    if (!container) {
      return
    }

    // 종로구 중심: 37.595829, 126.977207
    // 서초구 중심: 37.476471, 127.031244
    const options = {
      center: new window.kakao.maps.LatLng(37.595829, 126.977207),
      level: 5,
    }

    const initializedMap = new window.kakao.maps.Map(container, options)

    // 지도가 이동, 확대, 축소로 인해 중심좌표가 변경되면 마지막 파라미터로 넘어온 함수를 호출하도록 이벤트를 등록합니다
    window.kakao.maps.event.addListener(
      initializedMap,
      'center_changed',
      () => {
        // 지도의  레벨을 얻어옵니다
        const level = initializedMap.getLevel()

        // 지도의 중심좌표를 얻어옵니다
        const latlng = initializedMap.getCenter()
        const bounds = initializedMap.getBounds()
        // 영역의 남서쪽 좌표를 얻어옵니다
        const swLatLng = bounds.getSouthWest() // 작은 영역
        const south = swLatLng.getLat()
        const west = swLatLng.getLng()

        // 영역의 북동쪽 좌표를 얻어옵니다
        const neLatLng = bounds.getNorthEast() // 큰 영역
        const north = neLatLng.getLat()
        const east = neLatLng.getLng()
        if (level >= 7) alert('최대 확대입니다!')
        //37.476471, 127.031244
        const newCenterLat = 37.476471
        const newCenterLng = 127.031244
        if (newCenterLat >= south && newCenterLat <= north) {
          alert('서초구!')
        }
      }
    )
    setMap(initializedMap) // map 상태 업데이트

    const getData = async () => {
      try {
        const initialData = await fetchParkingData()
        setData(initialData || null) // undefined일 경우 null로 설정
      } catch (error) {
        setData(null) // 오류 발생 시 null로 설정
      }
    }
    // eslint-disable-next-line no-void
    void getData()
  }, [])

  useEffect(() => {
    const displayMarker = (lat: number, lot: number, elem: ParkingInfo) => {
      const imageSrc = '/src/assets/marker.svg'
      const imageSize = new window.kakao.maps.Size(30, 30)
      const imageOption = { offset: new window.kakao.maps.Point(15, 30) }

      const marker = new window.kakao.maps.Marker({
        map, // 현재 map 객체 사용
        position: new window.kakao.maps.LatLng(lat, lot),
        image: new window.kakao.maps.MarkerImage(
          imageSrc,
          imageSize,
          imageOption
        ),
      })

      // 마커 클릭 이벤트 등록
      window.kakao.maps.event.addListener(marker, 'click', () => {
        const position = marker.getPosition()
        setInfo(elem)

        const projection = map?.getProjection()
        if (projection) {
          const point = projection.pointFromCoords(position)
          setMarkerScreenPosition({
            x: point.x,
            y: point.y,
          })
          setIsModal(true)
        }
      })
      window.kakao.maps.event.addListener(map, 'click', () => {
        setIsModal(false)
        setInfo(null)
      })
      window.kakao.maps.event.addListener(map, 'dragstart', () => {
        setIsModal(false)
        setInfo(null)
      })
    }
    if (map && data) {
      data.forEach(elem => {
        const lat = Number(elem.LAT)
        const lot = Number(elem.LOT)
        displayMarker(lat, lot, elem) // 마커 표시
      })
    }
  }, [data, map]) // data와 map이 변경될 때마다 실행

  return (
    <>
      <MapContainer id="map" />
      {isModal && <Modal position={markerScreenPosition} info={info} />}
    </>
  )
}

export default Map
