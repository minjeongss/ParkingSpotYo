import styled from '@emotion/styled'
import { useEffect } from 'react'
import { MapInstance } from '../../../types/kakao'

const ToastContainer = styled.div({
  zIndex: 1002,
  position: 'fixed',
  top: '5%',
  right: '5%',
  padding: '10px 50px',
  borderRadius: '1rem',
  background: '#b76160',
  color: '#FFFFFF',
  transition: '0.2s all ease-out',
})
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
