import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Nav from './components/Nav'
import Login from './components/Login';
import Home from './components/Home';
import Signup from './components/Signup';
import Profile from './components/Profile';
import MatchRecommender from './components/MatchRecommender';
import Burger from './components/Burger';
import Info from './components/Info';
import Attractions from './components/Attractions';

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
          <Route path="/profile" element={<Profile setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/football" element={<MatchRecommender setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/food" element={<Burger setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/info" element={<Info setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/attractions" element={<Attractions setIsLoggedIn={ setIsLoggedIn } />} />
        </Routes>
        </BrowserRouter>
    </>
  )
}
