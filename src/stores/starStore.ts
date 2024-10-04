import { create } from 'zustand'
import { ParkingInfo } from '../types/api'

interface State {
  isStar: boolean
  star: ParkingInfo[] | null
}

interface Actions {
  actions: {
    toggleStar: (newIsStar: boolean) => void
    addStar: (newStar: ParkingInfo) => void
    deletePartStar: (lat: number, lot: number) => void
    deleteAllStar: () => void
  }
}

const useStarStore = create<State & Actions>(set => ({
  isStar: false,
  star: null,
  actions: {
    toggleStar: newIsStar => set({ isStar: newIsStar }),
    addStar: newStar =>
      set(state => ({
        star: state.star ? [...state.star, newStar] : [newStar],
      })),
    deletePartStar: (lat, lot) =>
      set(state => ({
        star: state.star?.filter(item => item.LAT !== lat && item.LOT !== lot),
      })),
    deleteAllStar: () => set({ star: null }),
  },
}))

export default useStarStore
