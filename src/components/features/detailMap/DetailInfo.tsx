import styled from '@emotion/styled'
import AlignIcon from './AlignIcon'
import AlignText from './AlignText'
import PriceTable from './PriceTable'
import AlignBoldText from './AlignBoldText'
import AlignLightText from './AlignLightText'
import AlignExtraLightText from './AlignExtraLightText'
import AlignRightText from './AlignRightText'

const InfoContainer = styled.div({
  width: '90%',
})
const DotLine = styled.hr({
  border: 'none',
  borderTop: '2px dotted #5E5D5D', // 도트 스타일
  margin: '10px 0', // 상하 여백 조정
})
const DetailInfo = () => {
  return (
    <InfoContainer>
      <AlignIcon name="주차장 이름" />
      <AlignExtraLightText type="정보 업데이트" data="2021-11-11 11:11" />
      <DotLine />
      <AlignBoldText data="현재 주차 가능 6대 / 전체 주차공간 33대" />
      <AlignText type="종류" data="노상" />
      <AlignText type="주소" data="서울 송파구 중대로 105" />
      <AlignText type="전화번호" data="02-420-1234" />
      <AlignText type="요금 정보" data="유료 (토요일 무료, 공휴일 무료)" />
      <PriceTable basicPrice={30000} extraPrice={30000} maxPrice={30000} />
      <AlignRightText />
      <AlignText type="정기권 금액" data="98,000원" />
      <AlignBoldText data="운영시간" />
      <AlignLightText type="평일" data="05:00~23:00" />
      <AlignLightText type="토요일" data="05:00~23:00" />
      <AlignLightText type="일요일/공휴일" data="05:00~23:00" />
      <AlignText type="야간개방" data="미개방" />
    </InfoContainer>
  )
}

export default DetailInfo
