import { create } from 'zustand'
import { ParkingInfo } from '../types/api'

interface StarItem
  extends Pick<
    ParkingInfo,
    'PKLT_NM' | 'ADDR' | 'PRK_TYPE_NM' | 'BSC_PRK_CRG'
  > {
  id: number
}
interface State {
  isStar: boolean
  star: StarItem[] | null
}

interface Actions {
  actions: {
    toggleStar: (newIsStar: boolean) => void
    addStar: (newStar: Omit<StarItem, 'id'>) => void
    deletePartStar: (id: number) => void
    deleteAllStar: () => void
  }
}

const useStarStore = create<State & Actions>(set => ({
  isStar: false,
  star: [
    { id: 1, PKLT_NM: 'A', ADDR: 'A', PRK_TYPE_NM: 'A', BSC_PRK_CRG: 4 },
    { id: 2, PKLT_NM: 'A', ADDR: 'A', PRK_TYPE_NM: 'A', BSC_PRK_CRG: 4 },
  ],
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
