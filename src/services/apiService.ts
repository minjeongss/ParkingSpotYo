import axios from 'axios'
import { ParkingInfo } from '../types/api'

export const fetchParkingData = async (
  region: string
): Promise<ParkingInfo[] | undefined> => {
  try {
    const response = await axios.get(
      `http://openapi.seoul.go.kr:8088/${import.meta.env.VITE_OPEN_API_KEY}/json/GetParkingInfo/1/1000/${region}`
    )
    const data = response.data as { GetParkingInfo: { row: ParkingInfo[] } }
    return data.GetParkingInfo.row
  } catch (error) {
    return undefined
  }
}
export default fetchParkingData
