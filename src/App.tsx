import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DetailPage from './pages/DetailPage'
import Map from './components/features/map/Map'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/detailMap" element={<DetailPage />} />
    </Routes>
  )
}

export default App
