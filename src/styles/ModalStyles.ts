import styled from '@emotion/styled'

export const ModalContainer = styled.div<{
  position: { x: number; y: number } | null
  width: number
  height: number
}>(({ position, width, height }) => ({
  position: 'absolute',
  left: position ? `${position.x - width / 2}px` : '0',
  top: position ? `${position.y - height - 60}px` : '0',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.3rem',
  background: 'white',
  borderRadius: '15px',
  padding: '1.5rem',
  boxShadow: '0 4px 4px rgba(0, 0, 0, 0.25)',
  zIndex: 999,
  minWidth: '250px',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    borderWidth: '20px 15px 0 15px', // 삼각형의 크기
    borderStyle: 'solid',
    borderColor: 'white transparent transparent transparent', // 삼각형 색상
  },
}))
export const ParkingNameText = styled.p({
  color: '#0875F5',
  fontWeight: 'bold',
  fontSize: '25px',
})
export const ParkingNumberText = styled.p({
  color: '#4395F6',
  fontWeight: 'bold',
  fontSize: '20px',
})
export const ParkingAddressText = styled.p({
  color: 'rgba(0,0,0,0.7)',
  fontSize: '18px',
})
export const ParkingTypeText = styled.p({
  color: 'rgba(0,0,0,0.54)',
  fontSize: '15px',
})
export const DetailBtn = styled.button({
  color: '#4395F6',
  fontSize: '13px',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
})
export const Container = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '6rem',
})
