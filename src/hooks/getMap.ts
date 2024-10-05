import { INITIAL_CENTER, INITIAL_ZOOM_LEVEL } from '../constants/mapConstants'

const getMap = () => {
  const container = document.getElementById('map')
  if (!container) {
    return
  }

  const options = {
    center: new window.kakao.maps.LatLng(
      INITIAL_CENTER.lat,
      INITIAL_CENTER.lng
    ),
    level: INITIAL_ZOOM_LEVEL,
  }

  const initializedMap = new window.kakao.maps.Map(container, options)
  // eslint-disable-next-line consistent-return
  return initializedMap
}

export default getMap
