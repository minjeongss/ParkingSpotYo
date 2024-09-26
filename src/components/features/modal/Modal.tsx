import { useEffect, useRef, useState } from 'react'
import styled from '@emotion/styled'
import StarIcon from '../../../assets/star.svg?react'
import MarkerIcon from '../../../assets/marker.svg?react'

const ModalContainer = styled.div<{
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
  boxShadow: '0 4px 4px rgba(0 0 0 / 25%)',
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
const ParkingNameText = styled.p({
  color: '#0875F5',
  fontWeight: 'bold',
  fontSize: '25px',
})
const ParkingNumberText = styled.p({
  color: '#4395F6',
  fontWeight: 'bold',
  fontSize: '20px',
})
const ParkingAddressText = styled.p({
  color: 'rgba(0,0,0/70)',
  fontSize: '18px',
})
const ParkingTypeText = styled.p({
  color: 'rgba(0,0,0/54)',
  fontSize: '15px',
})
const DetailBtn = styled.p({
  color: '#4395F6',
  fontSize: '13px',
})
const Container = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '6rem',
})

const Modal = ({
  position,
  info,
}: {
  position: { x: number; y: number } | null
}) => {
  // 마커 중앙정렬 기능
  const modalRef = useRef<HTMLDivElement | null>(null)
  const [modalWidth, setModalWidth] = useState<number>(0)
  const [modalHeight, setModalHeight] = useState<number>(0)
  useEffect(() => {
    if (modalRef.current) {
      setModalWidth(modalRef.current.offsetWidth)
      setModalHeight(modalRef.current.offsetHeight)
    }
  }, [position])

  return (
    <ModalContainer
      position={position}
      width={modalWidth}
      height={modalHeight}
      ref={modalRef}
    >
      <Container>
        <ParkingNameText>{info?.PKLT_NM}</ParkingNameText>
        <StarIcon />
      </Container>
      <ParkingAddressText>
        {info?.ADDR}
        <MarkerIcon />
      </ParkingAddressText>
      <ParkingNumberText>
        현재 주차 가능 대수: {info?.TPKCT - info?.NOW_PRK_VHCL_CNT}
      </ParkingNumberText>
      <Container>
        <ParkingTypeText>
          {info?.PRK_TYPE_NM} / 기본요금 {info?.BSC_PRK_CRG}원
        </ParkingTypeText>
        <DetailBtn>상세보기</DetailBtn>
      </Container>
    </ModalContainer>
  )
}

export default Modal
