import { fetchParkingData } from '../services/apiService'
import useParkingInfoStore from '../stores/parkingInfoStore'

const useParkingData = async (region: string) => {
  const setParkingData = useParkingInfoStore(
    state => state.actions.setParkingData
  )
  try {
    const initialData = await fetchParkingData(region)
    setParkingData(initialData || null)
  } catch (error) {
    setParkingData(null)
  }
}
export default useParkingData
