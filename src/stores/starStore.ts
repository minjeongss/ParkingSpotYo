import { create } from 'zustand'
import { ParkingInfo } from '../types/api'

export interface StarItem extends ParkingInfo {
  id: number
}
interface State {
  isStar: boolean
  star: StarItem[] | null
}

interface Actions {
  actions: {
    toggleStar: (newIsStar: boolean) => void
    addStar: (newStar: StarItem) => void
    deletePartStar: (id: number) => void
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
        star: state.star
          ? [...state.star, { ...newStar, id: Date.now() }]
          : [{ ...newStar, id: Date.now() }],
      })),
    deletePartStar: id =>
      set(state => ({ star: state.star?.filter(item => item.id !== id) })),
    deleteAllStar: () => set({ star: null }),
  },
}))

export default useStarStore
