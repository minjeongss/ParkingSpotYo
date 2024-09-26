import { Route, Routes } from 'react-router-dom'
import Map from './components/features/map/Map'
import DetailMap from './components/features/detailMap/DetailMap'
import './styles/App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Map />} />
      <Route path="/detail" element={<DetailMap />} />
    </Routes>
  )
}

export default App
