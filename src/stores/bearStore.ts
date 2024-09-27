import { create } from 'zustand'

type State = {
  bears: number
}
type Actions = {
  increasePopulation: () => void
}
const useBearStore = create<State & Actions>(set => ({
  bears: 0,
  increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
}))
export default useBearStore
