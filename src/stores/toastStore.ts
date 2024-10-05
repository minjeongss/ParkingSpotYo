import { create } from 'zustand'

interface State {
  isToast: boolean
  toastMessage: string
  toastColor: string
}
interface Actions {
  actions: {
    setIsToast: (condition: boolean) => void
    setToastMessage: (message: string) => void
    setToastColor: (color: string) => void
  }
}
const useToastStore = create<State & Actions>(set => ({
  isToast: false,
  toastMessage: '',
  toastColor: '',
  actions: {
    setIsToast: condition => set(() => ({ isToast: condition })),
    setToastMessage: message => set(() => ({ toastMessage: message })),
    setToastColor: color => set(() => ({ toastColor: color })),
  },
}))
export default useToastStore
