import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import CountryDetail from './pages/CountryDetail'

import HomePage from './pages/HomePage'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<HomePage />}></Route>
        <Route path="country/:countryName" element={<CountryDetail />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
