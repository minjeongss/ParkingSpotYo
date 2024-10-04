import { create } from 'zustand'
import { MapInstance } from '../types/kakao'

type State = {
  map: MapInstance | null
  region: string | null
}
type Actions = {
  actions: {
    setMapZustand: (newMap: MapInstance) => void
    setRegion: (newRegion: string) => void
  }
}
const useMapStore = create<State & Actions>(set => ({
  map: null,
  region: null,
  actions: {
    setMapZustand: newMap => set(() => ({ map: newMap })),
    setRegion: newRegion => set(() => ({ region: newRegion })),
  },
}))

export default useMapStore
