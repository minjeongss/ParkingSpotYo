import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import StarIcon from '../../../assets/star.svg?react'
import MarkerIcon from '../../../assets/marker.svg?react'
import { ParkingInfo } from '../../../types/api'
import {
  ModalContainer,
  ParkingNameText,
  ParkingNumberText,
  ParkingAddressText,
  ParkingTypeText,
  DetailBtn,
  Container,
} from '../../../styles/ModalStyles'

const Modal = ({
  position,
  info,
}: {
  position: { x: number; y: number } | null
  info: ParkingInfo | null
}) => {
  // 마커 중앙정렬 기능
  const modalRef = useRef<HTMLDivElement | null>(null)
  const [modalWidth, setModalWidth] = useState<number>(0)
  const [modalHeight, setModalHeight] = useState<number>(0)
  const navigate = useNavigate()

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
        현재 주차 가능 대수: {info ? info.TPKCT - info.NOW_PRK_VHCL_CNT : 0}
      </ParkingNumberText>
      <Container>
        <ParkingTypeText>
          {info?.PRK_TYPE_NM} / 기본요금 {info?.BSC_PRK_CRG ?? 0}원
        </ParkingTypeText>
        <DetailBtn onClick={() => navigate('/detail', { state: info })}>
          상세보기
        </DetailBtn>
      </Container>
    </ModalContainer>
  )
}

export default Modal
