declare global {
  interface Window {
    kakao: {
      maps: {
        LatLng: new (lat: number, lng: number) => LatLngInstance
        Map: new (container: HTMLElement, options: MapOptions) => MapInstance
        Marker: new (options: MarkerOptions) => MarkerInstance
        MarkerImage: new (
          src: string,
          size: Size,
          options?: { offset?: Point }
        ) => MarkerImageInstance
        InfoWindow: new (content: string | object) => InfoInstance
        event: {
          addListener: (
            target: MarkerInstance | MapInstance,
            event: string,
            callback: () => void
          ) => void
        }
        services: {
          Places: new (map: MapInstance) => PlaceInstance
          Status: {
            OK: 'OK'
          }
        }
        Size: new (width: number, height: number) => Size
        Point: new (width: number, height: number) => Point
      }
    }
  }
}

// 지도 기초 설정
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
  getProjection: () => {
    pointFromCoords: (position: LatLngInstance) => {
      x: number
      y: number
    }
  }
}

// 마커 설정
interface MarkerOptions {
  map?: MapInstance | null
  position: LatLngInstance
  title?: string
  image?: MarkerImageInstance // 이미지 추가
}

interface MarkerInstance {
  setMap: (map: MapInstance) => void
  getPosition: () => LatLngInstance
}

// 마커 이미지 설정
interface MarkerImageInstance {
  // 필요에 따라 추가 속성 정의
}

// 크기 설정
interface Size {
  width: number
  height: number
}

// 포인트 설정
interface Point {
  x: number
  y: number
}

// 마커 이벤트 설정
interface InfoInstance {
  open: (map: MapInstance, marker: MarkerInstance) => void
  close: () => void
  setContent: (content: string | HTMLElement | Element) => void
}

// 카테고리 제한 설정
interface PlaceInstance {
  categorySearch: (
    type: string,
    placeSearch: PlacesSearchCallback,
    target: object
  ) => void
}

export interface Place {
  place_name: string
  y: number
  x: number
}

export type PlacesSearchCallback = (data: Place[], status: string) => void
