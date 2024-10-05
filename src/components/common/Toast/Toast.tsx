import { useEffect } from 'react'
import { MapInstance } from '../../../types/kakao'
import ToastContainer from '../../../styles/ToastStyles'
import useToastStore from '../../../stores/toastStore'

interface ToastProps {
  // eslint-disable-next-line react/require-default-props
  map?: MapInstance | null
}
const Toast = ({ map = null }: ToastProps) => {
  const toastMessage = useToastStore(state => state.toastMessage)
  const toastColor = useToastStore(state => state.toastColor)
  const { setIsToast } = useToastStore(state => state.actions)
  useEffect(() => {
    const levelTimeout = setTimeout(() => {
      map?.setLevel(5)
    }, 500)
    const toastTimeout = setTimeout(() => {
      setIsToast(false)
    }, 2000)
    return () => {
      clearTimeout(levelTimeout)
      clearTimeout(toastTimeout)
    }
  }, [])
  return <ToastContainer background={toastColor}>{toastMessage}</ToastContainer>
}

export default Toast
