// kakao.d.ts 파일을 생성하거나 기존 파일에 추가
declare global {
  interface Window {
    kakao: {
      maps: {
        LatLng: new (lat: number, lng: number) => LatLngInstance
        Map: new (container: HTMLElement, options: MapOptions) => MapInstance
      }
    }
  }
}

// 카카오 지도 관련 타입 정의
interface LatLngInstance {
  getLat: () => number
  getLng: () => number
}

interface MapOptions {
  center: LatLngInstance
  level: number
}

interface MapInstance {
  setCenter: (latlng: LatLngInstance) => void
  setLevel: (level: number) => void
  // 추가로 필요한 메서드 정의
}

export {}
