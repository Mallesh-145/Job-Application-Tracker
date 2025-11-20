import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CompanyPage from './pages/CompanyPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route for the Dashboard */}
        <Route path="/" element={<Home />} />
        
        {/* Route for the Details Page (The :id part is dynamic!) */}
        <Route path="/company/:id" element={<CompanyPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App