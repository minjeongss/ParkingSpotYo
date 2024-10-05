import LOCALSTORAGE_KEY from '../constants/localStorageConstants'
import useStarStore from '../stores/starStore'
import { ParkingInfo } from '../types/api'

export const getFromLocal = (): ParkingInfo[] | null => {
  const localStarlist = localStorage.getItem(LOCALSTORAGE_KEY)
  if (localStarlist) {
    return JSON.parse(localStarlist) as ParkingInfo[]
  }
  return null
}
export const saveToLocal = () => {
  const starList = useStarStore.getState().star
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(starList))
}
export const deleteAllToLocal = () => {
  localStorage.clear()
}
