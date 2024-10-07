import axios from 'axios'
import { ParkingInfo } from '../types/api'

export const fetchParkingData = async (
  region: string
): Promise<ParkingInfo[] | undefined> => {
  try {
    const apiUrl =
      process.env.NODE_ENV === 'development'
        ? import.meta.env.VITE_API_BASE_URL
        : '/api'
    const response = await axios.get(
      `${apiUrl}/${import.meta.env.VITE_OPEN_API_KEY}/json/GetParkingInfo/1/1000/${region}`
    )
    const data = response.data as { GetParkingInfo: { row: ParkingInfo[] } }
    return data.GetParkingInfo.row
  } catch (error) {
    return undefined
  }
}

export default fetchParkingData
