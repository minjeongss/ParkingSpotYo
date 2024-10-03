import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { ParkingInfo } from '../types/api'

const useMarker = (
  lat: number,
  lot: number,
  elem: ParkingInfo,
  map,
  markersRef,
  currentOverlayRef
) => {
  const navigate = useNavigate()

  useEffect(() => {
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

    // Cleanup function to remove the marker and overlay when the component unmounts
    return () => {
      marker.setMap(null)
      if (currentOverlayRef.current) {
        currentOverlayRef.current.setMap(null)
      }
    }
  }, [lat, lot, elem, map, markersRef, currentOverlayRef, navigate]) // 의존성 배열
}

export default useMarker
