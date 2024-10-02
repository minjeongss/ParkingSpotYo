import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchParkingData } from '../../../services/apiService'
import { ParkingInfo } from '../../../types/api'
import {
  CustomOverlayInstance,
  MapInstance,
  SearchAddrFromCoords,
  DisplayCenterInfo,
  MarkerInstance,
} from '../../../types/kakao'
import MapContainer from '../../../styles/MapStyles'
import SearchCurrentMap from './SearchCurrentMap'
import MoveCurrentPosition from './MoveCurrentPosition'

const Map = () => {
  const navigate = useNavigate()
  const [data, setData] = useState<ParkingInfo[] | null>(null)
  const [map, setMap] = useState<MapInstance | null>(null) // map 상태 추가
  const [currentRegion, setCurrentRegion] = useState<string | null>(null) // 현재 지역구 상태 추가
  const currentOverlayRef = useRef<CustomOverlayInstance | null>(null) // useRef로 오버레이 상태 추가
  const markersRef = useRef<MarkerInstance[]>([])

  const getData = async (region: string) => {
    try {
      const initialData = await fetchParkingData(region)
      setData(initialData || null) // undefined일 경우 null로 설정
    } catch (error) {
      setData(null) // 오류 발생 시 null로 설정
    }
  }
  const clearMarkers = () => {
    markersRef.current.forEach(marker => {
      marker.setMap(null)
    })
    markersRef.current = []
  }
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

    // eslint-disable-next-line no-void
    void getData('종로구')
    setCurrentRegion('종로구')
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
      markersRef.current.push(marker)

      // 마커 클릭 이벤트 등록
      window.kakao.maps.event.addListener(marker, 'click', () => {
        // 이전 오버레이가 있으면 제거
        if (currentOverlayRef.current) {
          currentOverlayRef.current.setMap(null)
        }
        // custom overlay
        const content = document.createElement('div')
        content.innerHTML = `
          <div class="overlayConainer">
            <div class="top">
              <p class="nameText">${elem.PKLT_NM}</p>
              <button class="closeBtn">닫기</button>
            </div>
            <p class="addressText">${elem.ADDR}</p>
            <p class="numberText">현재 주차 가능 대수: ${elem.TPKCT - elem.NOW_PRK_VHCL_CNT}</p>
            <div class="bottom">
              <p class="typeText">${elem.PRK_TYPE_NM} / 기본요금 ${elem.BSC_PRK_CRG}원</p>
              <button class="detailBtn">상세보기</button>
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
          '.closeBtn'
        ) as HTMLButtonElement
        if (closeOverlayBtn) {
          closeOverlayBtn.onclick = () => {
            closeOverlay() // closeOverlay 함수 호출
          }
        }
        const detailOverlayBtn = content.querySelector(
          '.detailBtn'
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
  }, [navigate, data, map, currentRegion]) // data와 map이 변경될 때마다 실행

  useEffect(() => {
    const geocoder = new window.kakao.maps.services.Geocoder()
    const searchAddrFromCoords: SearchAddrFromCoords = (coords, callback) => {
      geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback)
    }
    const displayCenterInfo: DisplayCenterInfo = (result, status) => {
      if (status === window.kakao.maps.services.Status.OK) {
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < result.length; i++) {
          // 행정동의 region_type 값은 'H' 이므로
          if (result[i].region_type === 'H') {
            const newRegion = result[i].address_name.split(' ')[1]
            console.log(newRegion, currentRegion)
            if (newRegion !== currentRegion) {
              setCurrentRegion(newRegion)
              clearMarkers()
              // eslint-disable-next-line no-void
              void getData(newRegion)
            }
            break
          }
        }
      }
    }
    if (map) {
      searchAddrFromCoords(map.getCenter(), displayCenterInfo)
      window.kakao.maps.event.addListener(map, 'idle', () => {
        searchAddrFromCoords(map.getCenter(), displayCenterInfo)
      })
    }
  }, [map, currentRegion])
  return (
    <div>
      <MapContainer id="map" />
      <SearchCurrentMap currentRegion={currentRegion} setData={setData} />
      <MoveCurrentPosition />
    </div>
  )
}

export default Map
