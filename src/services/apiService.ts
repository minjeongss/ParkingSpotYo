import axios from 'axios'
import { ParkingInfo } from '../types/api'

export const fetchParkingData = async (): Promise<
  ParkingInfo[] | undefined
> => {
  try {
    const response = await axios.get(
      'http://openapi.seoul.go.kr:8088/4a594a4d426d696e37366374565352/json/GetParkingInfo/1/1000/종로구'
    )
    const data = response.data as { GetParkingInfo: { row: ParkingInfo[] } }
    return data.GetParkingInfo.row
  } catch (error) {
    return undefined
  }
}
export default fetchParkingData
