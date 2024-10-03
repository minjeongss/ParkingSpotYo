import { fetchParkingData } from '../services/apiService'

const useParkingData = async (region: string) => {
  let data = null
  try {
    const initialData = await fetchParkingData(region)
    data = initialData
  } catch (error) {
    data = null
  }
  return data
}
export default useParkingData
