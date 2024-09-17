import { useState } from 'react'
import TripGenerator from './pages/TripGenerator';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import Navbar from './components/NavBar';
import { ToastContainer } from 'react-toastify';
import { GoogleOAuthProvider } from '@react-oauth/google';
import ViiewTrip from './pages/ViiewTrip';
import MyTrips from './pages/MyTrips';


function App() {

  return (
    <>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
        <Router> 
          <Navbar />
          <main className='min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950
    text-white text-sm sm:text-base'> {/*gradient-to-r menas gradient to right*/}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/trip-generator' element={<TripGenerator />} />
            <Route path='/view-trip/:tripID' element={<ViiewTrip />} />
            <Route path='/my-trips' element={<MyTrips />} />
          </Routes>
          </main>
          <Footer />
          <ToastContainer />
        </Router>
      </GoogleOAuthProvider>
    </>
  );
};

export default App
