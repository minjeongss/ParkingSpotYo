declare global {
  interface Window {
    kakao: {
      maps: {
        LatLng: new (lat: number, lng: number) => LatLngInstance
        Map: new (container: HTMLElement, options: MapOptions) => MapInstance
        Marker: new (options: MarkerOptions) => MarkerInstance
        InfoWindow: new (content: string | object) => InfoInstance
        event: {
          addListener: (
            target: MarkerInstance,
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
}

// 마커 설정
interface MarkerOptions {
  map?: MapInstance | null
  position: LatLngInstance
  title?: string
}

interface MarkerInstance {
  setMap: (map: MapInstance) => void
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
