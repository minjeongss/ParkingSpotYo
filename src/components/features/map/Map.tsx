import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import Modal from '../modal/Modal'
import { fetchParkingData } from '../../../services/apiService'

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
  const [data, setData] = useState(null)
  const [map, setMap] = useState(null) // map 상태 추가
  const [info, setInfo] = useState(null)
  const displayMarker = (
    x,
    y,
    name,
    address,
    entireParkingSpot,
    ableParkingSpot,
    type,
    price
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
      const lat = position.getLat()
      const lng = position.getLng()

      setInfo({
        PKLT_NM: name,
        ADDR: address,
        TPKCT: entireParkingSpot,
        NOW_PRK_VHCL_CNT: ableParkingSpot,
        PRK_TYPE_NM: type,
        BSC_PRK_CRG: price,
      })

      const projection = map.getProjection()
      const point = projection.pointFromCoords(position)

      setMarkerScreenPosition({
        x: point.x,
        y: point.y,
      })
      setIsModal(true)
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
      const initialData = await fetchParkingData()
      setData(initialData)
    }
    getData()
  }, [])

  useEffect(() => {
    console.log('CHANGE')
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
      console.log('CHANGE COMPLETE')
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
