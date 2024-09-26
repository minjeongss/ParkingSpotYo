import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import Modal from '../modal/Modal'
import { fetchParkingData } from '../../../services/apiService'
import { ParkingInfo, ParkingInfoPartial } from '../../../types/api'
import { MapInstance } from '../../../types/kakao'

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
  const [data, setData] = useState<ParkingInfo[] | null>(null)
  const [map, setMap] = useState<MapInstance | null>(null) // map 상태 추가
  const [info, setInfo] = useState<ParkingInfoPartial | null>(null)

  useEffect(() => {
    const container = document.getElementById('map')
    if (!container) {
      return
    }

    // 종로구 중심: 37.595829, 126.977207
    const options = {
      center: new window.kakao.maps.LatLng(37.595829, 126.977207),
      level: 5,
    }

    const initializedMap = new window.kakao.maps.Map(container, options)
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
    const displayMarker = (
      x: number,
      y: number,
      name: string,
      address: string,
      entireParkingSpot: number,
      ableParkingSpot: number,
      type: string,
      price: number
    ) => {
      const imageSrc = '/src/assets/marker.svg'
      const imageSize = new window.kakao.maps.Size(30, 30)
      const imageOption = { offset: new window.kakao.maps.Point(15, 30) }

      const marker = new window.kakao.maps.Marker({
        map, // 현재 map 객체 사용
        position: new window.kakao.maps.LatLng(x, y),
        image: new window.kakao.maps.MarkerImage(
          imageSrc,
          imageSize,
          imageOption
        ),
      })

      // 마커 클릭 이벤트 등록
      window.kakao.maps.event.addListener(marker, 'click', () => {
        const position = marker.getPosition()

        setInfo({
          PKLT_NM: name,
          ADDR: address,
          TPKCT: entireParkingSpot,
          NOW_PRK_VHCL_CNT: ableParkingSpot,
          PRK_TYPE_NM: type,
          BSC_PRK_CRG: price,
        })

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
        const name = elem.PKLT_NM
        const address = elem.ADDR
        const entireParkingSpot = elem.TPKCT
        const ableParkingSpot = elem.NOW_PRK_VHCL_CNT
        const type = elem.PRK_TYPE_NM
        const price = elem.BSC_PRK_CRG
        displayMarker(
          lat,
          lot,
          name,
          address,
          entireParkingSpot,
          ableParkingSpot,
          type,
          price
        ) // 마커 표시
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
