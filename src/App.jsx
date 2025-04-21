import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Nav from './components/Nav'
import Login from './components/Login';
import Home from './components/Home';
import Signup from './components/Signup';
import Profile from './components/Profile';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Nav isLoggedIn={ isLoggedIn } />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setIsLoggedIn={ setIsLoggedIn } />} />
          <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/profile" element={<Profile setIsLoggedIn={ setIsLoggedIn } />} />
        </Routes>
        </BrowserRouter>
    </>
  )
}
