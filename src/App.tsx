import { Route, Routes } from 'react-router-dom'
import Map from './components/features/map/Map'
import DetailMap from './components/features/detailMap/DetailMap'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Map />} />
      <Route path="/detailMap" element={<DetailMap />} />
    </Routes>
  )
}

export default App
