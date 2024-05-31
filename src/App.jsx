
import './App.css'
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
// import StakePage from './Pages/StakePage';

function App() {


  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/Stake" element={<StakePage />} /> */}

        </Routes>

      </BrowserRouter>


    </>
  )
}

export default App
