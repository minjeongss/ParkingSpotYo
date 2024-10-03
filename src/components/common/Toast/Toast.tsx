import { useEffect } from 'react'
import { MapInstance } from '../../../types/kakao'
import ToastContainer from '../../../styles/ToastStyles'

interface ToastProps {
  message: string
  setIsToast: (isToast: boolean) => void
  map: MapInstance | null
}
const Toast = ({ message, setIsToast, map }: ToastProps) => {
  useEffect(() => {
    setTimeout(() => {
      map?.setLevel(5)
    }, 500)
    setTimeout(() => {
      setIsToast(false)
    }, 2000)
  }, [])
  return <ToastContainer>{message}</ToastContainer>
}

export default Toast
