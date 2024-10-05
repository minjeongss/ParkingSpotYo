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
    filterFree: () => void
    filterNW: () => void
    filterNS: () => void
    filterAbleParking: () => void
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
    reset: () =>
      set(() => ({
        filterPargkigData: null,
      })),
    filterFree: () =>
      set(state => ({
        filterPargkigData: state.parkingData?.filter(
          item => item.PAY_YN === 'N'
        ),
      })),
    filterNW: () =>
      set(state => ({
        filterPargkigData: state.parkingData?.filter(
          item => item.PKLT_TYPE === 'NW'
        ),
      })),
    filterNS: () =>
      set(state => ({
        filterPargkigData: state.parkingData?.filter(
          item => item.PKLT_TYPE === 'NS'
        ),
      })),
    filterAbleParking: () =>
      set(state => ({
        filterPargkigData: state.parkingData?.filter(
          item => Math.abs(item.TPKCT - item.NOW_PRK_VHCL_CNT) > 0
        ),
      })),
  },
}))

export default useParkingInfoStore
