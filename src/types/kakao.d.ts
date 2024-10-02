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
        CustomOverlay: new (
          options?: CustomOverlayOptions
        ) => CustomOverlayInstance
        StaticMap: new (
          staticMapContainer: HTMLElement,
          staticMapOption: MapOptions
        ) => void
        event: {
          addListener: (
            target: MarkerInstance | MapInstance | null,
            event: string,
            callback: () => void
          ) => void
        }
        services: {
          Places: new (map: MapInstance) => PlaceInstance
          Geocoder: new () => GeocoderInstance
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
  getCenter: () => LatLngInstance
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
  setMap: (map: MapInstance | null) => void
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

// 마커 커스텀 오버레이 설정
interface CustomOverlayOptions {
  map: MapInstance | null
  position: LatLngInstance
  content: HTMLElement | string
  yAnchor?: number // yAnchor는 선택적 속성입니다.
}
interface CustomOverlayInstance {
  setMap: (map: MapInstance | null) => void
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

// Geocoder
interface GeocoderInstance {
  coord2RegionCode: (
    lng: number,
    lat: number,
    callback: (result: RegionCodeResult[], status: string) => void
  ) => void
}
interface RegionCodeResult {
  region_type: string
  address_name: string
}

export type SearchAddrFromCoords = (
  coords: LatLngInstance,
  callback: (result: RegionCodeResult[], status: string) => void
) => void

export type DisplayCenterInfo = (
  result: RegionCodeResult[],
  status: string
) => void

export type PlacesSearchCallback = (data: Place[], status: string) => void
