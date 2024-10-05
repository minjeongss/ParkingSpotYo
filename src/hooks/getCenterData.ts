import { CENTER } from '../constants/mapConstants'

const getCenterData = (region: string) => {
  const center = CENTER[region] || CENTER.중구
  const location = new window.kakao.maps.LatLng(center.lat, center.lng)
  return location
}

export default getCenterData
