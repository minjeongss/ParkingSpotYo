import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchParkingData } from '../../../services/apiService'
import { ParkingInfo } from '../../../types/api'
import { CustomOverlayInstance, MapInstance } from '../../../types/kakao'
import MapContainer from '../../../styles/MapStyles'

const Map = () => {
  const navigate = useNavigate()
  const [data, setData] = useState<ParkingInfo[] | null>(null)
  const [map, setMap] = useState<MapInstance | null>(null) // map 상태 추가
  const currentOverlayRef = useRef<CustomOverlayInstance | null>(null) // useRef로 오버레이 상태 추가

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
        // 이전 오버레이가 있으면 제거
        if (currentOverlayRef.current) {
          currentOverlayRef.current.setMap(null)
        }
        // custom overlay
        const content = document.createElement('div')
        content.innerHTML = `
        <div class="wrap">
          <div class="info">
            <div class="title">
              ${elem.PKLT_NM}
              <div class="close" onclick="window.dispatchEvent(new CustomEvent('closeOverlay'));" title="닫기"></div>
            </div>
            <div class="body">
              <div class="desc">
                <div class="ellipsis">${elem.ADDR}</div>
                <div class="jibun ellipsis">현재 주차 가능 대수: ${elem.TPKCT - elem.NOW_PRK_VHCL_CNT}</div>
                <div>${elem.PRK_TYPE_NM} / 기본요금 ${elem.BSC_PRK_CRG ?? 0}원</div>
              </div>
              <button id="closeOverlayBtn">닫기</button>
              <button id="detailOverlayBtn">상세보기</button>
            </div>
          </div>
        </div>
        `
        const customOverlay = new window.kakao.maps.CustomOverlay({
          map,
          position: new window.kakao.maps.LatLng(lat, lot),
          content,
          yAnchor: 1,
        })
        // useRef를 통해 현재 오버레이 상태 업데이트
        currentOverlayRef.current = customOverlay

        const closeOverlay = () => {
          customOverlay.setMap(null)
          currentOverlayRef.current = null // 오버레이 제거 시 상태도 초기화
        }
        const closeOverlayBtn = content.querySelector(
          '#closeOverlayBtn'
        ) as HTMLButtonElement
        if (closeOverlayBtn) {
          closeOverlayBtn.onclick = () => {
            closeOverlay() // closeOverlay 함수 호출
          }
        }
        const detailOverlayBtn = content.querySelector(
          '#detailOverlayBtn'
        ) as HTMLButtonElement
        if (detailOverlayBtn) {
          detailOverlayBtn.onclick = () => {
            navigate('/detailMap', { state: elem })
          }
        }
      })
    }
    if (map && data) {
      data.forEach(elem => {
        const lat = Number(elem.LAT)
        const lot = Number(elem.LOT)
        displayMarker(lat, lot, elem) // 마커 표시
      })
    }
  }, [navigate, data, map]) // data와 map이 변경될 때마다 실행

  return <MapContainer id="map" />
}

export default Map
