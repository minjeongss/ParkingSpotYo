import { create } from 'zustand'
import { ParkingInfo } from '../types/api'

interface State {
  parkingData: ParkingInfo[] | null
  filteredPargkinData: ParkingInfo[] | null
}
interface Actions {
  actions: {
    setParkingData: (newData: ParkingInfo[] | null) => void
  }
}
const useParkingInfoStore = create<State & Actions>(set => ({
  parkingData: null,
  filteredPargkinData: null,
  actions: {
    setParkingData: newData => set({ parkingData: newData }),
  },
}))

export default useParkingInfoStore
