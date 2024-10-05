import { create } from 'zustand'
import { ParkingInfo } from '../types/api'

interface State {
  parkingData: ParkingInfo[] | null
  filterPargkigData: ParkingInfo[] | null
  isFilter: boolean[]
}
interface Actions {
  actions: {
    setParkingData: (newData: ParkingInfo[] | null) => void
    setIsFilter: (newFilter: boolean[]) => void
    filterNotFree: () => void
  }
}
const useParkingInfoStore = create<State & Actions>(set => ({
  parkingData: null,
  filterPargkigData: null,
  isFilter: [false, false, false, false, false],
  actions: {
    setParkingData: newData => set({ parkingData: newData }),
    setIsFilter: (newFilter: boolean[]) => set({ isFilter: newFilter }),
    filterNotFree: () =>
      set(state => ({
        filterPargkigData: state.parkingData?.filter(
          item => item.PAY_YN === 'Y'
        ),
      })),
    resetNotFree: () =>
      set(() => ({
        filterPargkigData: null,
      })),
  },
}))

export default useParkingInfoStore
