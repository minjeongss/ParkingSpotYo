import { create } from 'zustand'
import { ParkingInfo } from '../types/api'

type State = {
  parkingData: ParkingInfo[] | null
}
type Actions = {
  actions: {
    setParkingData: (newData: ParkingInfo[] | null) => void
  }
}
const useParkingInfoStore = create<State & Actions>(set => ({
  parkingData: null,
  actions: {
    setParkingData: newData => set({ parkingData: newData }),
  },
}))

export default useParkingInfoStore
