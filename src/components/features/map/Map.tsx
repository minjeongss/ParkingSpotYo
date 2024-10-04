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
import useMap from '../../../hooks/useMap'
import Toast from '../../common/Toast/Toast'
import useParkingInfoStore from '../../../stores/parkingInfoStore'
import useMapStore from '../../../stores/mapStore'
import useStarStore from '../../../stores/starStore'
import Filter from '../filter/Filter'
import { FILTER_GAP, FILTER_TYPE } from '../../../constants/filterConstants'

const Map = () => {
  const navigate = useNavigate()
  const [map, setMap] = useState<MapInstance | null>(null) // map 상태 추가
  const [isToast, setIsToast] = useState<boolean>(false)
  const currentOverlayRef = useRef<CustomOverlayInstance | null>(null)
  const markersRef = useRef<MarkerInstance[]>([])
  const currentRegion = useRef<string | null>(null)
  const { setRegion } = useMapStore(state => state.actions)
  const parkingData = useParkingInfoStore(state => state.parkingData)
  const setParkingData = useParkingInfoStore(
    state => state.actions.setParkingData
  )
  const addStar = useStarStore(state => state.actions.addStar)
  const deletePartStar = useStarStore(state => state.actions.deletePartStar)

  const getData = async (region: string) => {
    try {
      const initialData = await fetchParkingData(region)
      setParkingData(initialData || null)
    } catch (error) {
      console.error('Fetch Parking Data', error)
      setParkingData(null)
    }
  }
  const clearMarkers = () => {
    markersRef.current.forEach(marker => {
      marker.setMap(null)
    })
    markersRef.current = []
  }

  useEffect(() => {
    const initializedMap = useMap()
    if (initializedMap) {
      setMap(initializedMap) // map 상태 업데이트

      // eslint-disable-next-line no-void
      void getData('중구')
      currentRegion.current = '중구'
      setRegion('중구')
    }
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
        const isStarInit = useStarStore
          .getState()
          .star?.some(item => item.LAT === elem.LAT && item.LOT === elem.LOT)
        const starImageSrc = isStarInit
          ? '/src/assets/yellowStar.svg'
          : '/src/assets/grayStar.svg'
        const content = document.createElement('div')
        content.innerHTML = `
          <div class="overlayConainer">
            <div class="top">
              <div class="topleft">
                <p class="nameText">${elem.PKLT_NM}</p>
                <button class="starBtn">
                  <img src="${starImageSrc}"/>
                </button>
              </div>
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
        const starBtn = content.querySelector('.starBtn') as HTMLButtonElement
        if (starBtn) {
          starBtn.onclick = () => {
            const isStar = useStarStore
              .getState()
              .star?.some(
                item => item.LAT === elem.LAT && item.LOT === elem.LOT
              )
            if (isStar) {
              deletePartStar(elem.LAT, elem.LOT)
              starBtn.innerHTML = '<img src="/src/assets/grayStar.svg"/>'
            } else {
              addStar(elem)
              starBtn.innerHTML = '<img src="/src/assets/yellowStar.svg"/>'
            }
          }
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
    if (map && parkingData) {
      clearMarkers()
      parkingData.forEach(elem => {
        const lat = Number(elem.LAT)
        const lot = Number(elem.LOT)
        displayMarker(lat, lot, elem) // 마커 표시
      })
    }
  }, [navigate, parkingData, map, currentRegion]) // data와 map이 변경될 때마다 실행

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
            if (newRegion !== currentRegion.current) {
              currentRegion.current = newRegion
              setRegion(newRegion)
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
      window.kakao.maps.event.addListener(map, 'idle', () => {
        searchAddrFromCoords(map.getCenter(), displayCenterInfo)
      })
      window.kakao.maps.event.addListener(map, 'zoom_changed', () => {
        const level = map.getLevel()
        if (level >= 7) {
          setIsToast(true)
        }
      })
    }
  }, [map, currentRegion])
  return (
    <MapContainer id="map">
      <Filter />
      <SearchCurrentMap />
      <MoveCurrentPosition map={map} />
      {isToast && (
        <Toast
          message="⚠️ 더 이상 축소가 불가능합니다!"
          setIsToast={setIsToast}
          map={map}
        />
      )}
    </MapContainer>
  )
}

export default Map
