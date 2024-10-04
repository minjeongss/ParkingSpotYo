import { create } from 'zustand'
import { MapInstance } from '../types/kakao'

type State = {
  map: MapInstance | null
}
type Actions = {
  actions: {
    setMapZustand: (newMap: MapInstance) => void
  }
}
const useMapStore = create<State & Actions>(set => ({
  map: null,
  actions: {
    setMapZustand: newMap => set(() => ({ map: newMap })),
  },
}))

export default useMapStore
