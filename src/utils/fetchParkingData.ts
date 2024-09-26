import axios from 'axios'

export const fetchParkingData = async () => {
  try {
    const response = await axios(
      'http://openapi.seoul.go.kr:8088/4a594a4d426d696e37366374565352/json/GetParkingInfo/1/1000/종로구'
    )
    return response.data['GetParkingInfo']['row']
  } catch (error) {
    console.error('실패했습니다', error)
  }
}
