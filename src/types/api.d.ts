export interface ParkingInfo {
  PKLT_CD: string
  PKLT_NM: string
  ADDR: string
  PKLT_TYPE: string
  PRK_TYPE_NM: string
  OPER_SE: string
  OPER_SE_NM: string
  TELNO: string
  PRK_STTS_YN: string
  PRK_STTS_NM: string
  TPKCT: number
  NOW_PRK_VHCL_CNT: number
  NOW_PRK_VHCL_UPDT_TM: string
  PAY_YN: string
  PAY_YN_NM: string
  NGHT_PAY_YN: string
  NGHT_PAY_YN_NM: string
  WD_OPER_BGNG_TM: string
  WD_OPER_END_TM: string
  WE_OPER_BGNG_TM: string
  WE_OPER_END_TM: string
  LHLDY_OPER_BGNG_TM: string
  LHLDY_OPER_END_TM: string
  SAT_CHGD_FREE_SE: string
  SAT_CHGD_FREE_NM: string
  LHLDY_CHGD_FREE_SE: string
  LHLDY_CHGD_FREE_SE_NAME: string
  PRD_AMT: string
  STRT_PKLT_MNG_NO: string
  BSC_PRK_CRG: number
  BSC_PRK_HR: number
  ADD_PRK_CRG: number
  ADD_PRK_HR: number
  BUS_BSC_PRK_CRG: number
  BUS_BSC_PRK_HR: number
  BUS_ADD_PRK_HR: number
  BUS_ADD_PRK_CRG: number
  DAY_MAX_CRG: number
  LAT: number
  LOT: number
  SHRN_PKLT_MNG_NM: string
  SHRN_PKLT_MNG_URL: string
  SHRN_PKLT_YN: string
  SHRN_PKLT_ETC: string
}

export interface ParkingInfoPartial {
  PKLT_NM: string
  ADDR: string
  TPKCT: number
  NOW_PRK_VHCL_CNT: number
  PRK_TYPE_NM: string
  BSC_PRK_CRG: number
}
