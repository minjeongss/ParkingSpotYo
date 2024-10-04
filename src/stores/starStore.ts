import { create } from 'zustand'

interface State {
  isStar: boolean
}
interface Actions {
  actions: {
    toggleStar: (newIsStar: boolean) => void
  }
}
const useStarStore = create<State & Actions>(set => ({
  isStar: false,
  star: [
    { PKLT_NM: 'A', ADDR: 'A', PRK_TYPE_NM: 'A', BSC_PRK_CRG: 'A' },
    { PKLT_NM: 'A', ADDR: 'A', PRK_TYPE_NM: 'A', BSC_PRK_CRG: 'A' },
  ],
  actions: {
    toggleStar: newIsStar => set({ isStar: newIsStar }),
  },
}))

export default useStarStore
