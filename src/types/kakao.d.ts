// kakao.d.ts 파일을 생성하거나 기존 파일에 추가
declare global {
  interface Window {
    kakao: {
      maps: {
        LatLng: new (lat: number, lng: number) => LatLngInstance
        Map: new (container: HTMLElement, options: MapOptions) => MapInstance
        Marker: new (options: MarkerOptions) => MarkerInstance
        InfoWindow: new (content) => InfoInstance
        event: {
          addListener: (
            target: MarkerInstance,
            event: string,
            callback: () => void
          ) => void
        }
      }
    }
  }
}

export interface MarkerData {
  title: string
  content: string
  latlng: LatLngInstance
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
export interface MapInstance {
  setCenter: (latlng: LatLngInstance) => void
  setLevel: (level: number) => void
}
interface MarkerOptions {
  map?: MapInstance | null
  position: LatLngInstance
  title?: string
}
export interface MarkerInstance {
  setMap: (map: MapInstance) => void
}
export interface InfoInstance {
  open: (map: MapInstance, marker: MarkerInstance) => void
  close: () => void
}

export {}
