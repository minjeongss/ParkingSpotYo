import AlignIcon from './AlignIcon'
import AlignText from './AlignText'
import PriceTable from './PriceTable'
import AlignBoldText from './AlignBoldText'
import AlignLightText from './AlignLightText'
import AlignExtraLightText from './AlignExtraLightText'
import AlignRightText from './AlignRightText'
import formatTime from '../../../utils/formatTime'
import { InfoContainer, DotLine } from '../../../styles/DetailMapStyles'
import { ParkingInfo } from '../../../types/api'

const DetailInfo = ({ info }: { info: ParkingInfo }) => {
  return (
    <InfoContainer>
      <AlignIcon info={info} />
      <AlignExtraLightText
        type="정보 업데이트"
        data={
          info.NOW_PRK_VHCL_UPDT_TM === ''
            ? '정보 제공 없음'
            : info.NOW_PRK_VHCL_UPDT_TM
        }
      />
      <DotLine />
      <AlignBoldText
        data={`현재 주차 가능 ${info.TPKCT - info.NOW_PRK_VHCL_CNT}대 / 전체 주차공간 ${info.TPKCT}대`}
      />
      <AlignText type="종류" data={info.PRK_TYPE_NM} />
      <AlignText type="주소" data={info.ADDR} />
      <AlignText type="전화번호" data={info.TELNO} />
      <AlignText
        type="요금 정보"
        data={`${info.PAY_YN_NM} (토요일 ${info.SAT_CHGD_FREE_NM}, 공휴일 ${info.LHLDY_CHGD_FREE_SE_NAME})`}
      />
      <PriceTable
        basicPrice={info.BSC_PRK_CRG}
        extraPrice={info.ADD_PRK_CRG}
        maxPrice={info.DAY_MAX_CRG}
      />
      {!info.SAT_CHGD_FREE_SE && !info.LHLDY_CHGD_FREE_SE && (
        <AlignRightText
          satFree={info.SAT_CHGD_FREE_NM}
          lhldyFree={info.LHLDY_CHGD_FREE_SE_NAME}
        />
      )}
      <AlignText
        type="정기권 금액"
        data={`${info.PRD_AMT === '' ? '정보 제공 없음' : `${info.PRD_AMT}원`}`}
      />
      <AlignBoldText data="운영시간" />
      <AlignLightText
        type="평일"
        data={`${formatTime(info.WD_OPER_BGNG_TM)}~${formatTime(info.WD_OPER_END_TM)}`}
      />
      <AlignLightText
        type="주말"
        data={`${formatTime(info.WE_OPER_BGNG_TM)}~${formatTime(info.WE_OPER_END_TM)}`}
      />
      <AlignLightText
        type="공휴일"
        data={`${formatTime(info.LHLDY_OPER_BGNG_TM)}~${formatTime(info.LHLDY_OPER_END_TM)}`}
      />
      <AlignText
        type="야간개방"
        data={info.NGHT_PAY_YN_NM.replace('야간', '').trim()}
      />
    </InfoContainer>
  )
}

export default DetailInfo
