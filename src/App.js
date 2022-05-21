import React from 'react';
import Navigation from './Navigation/Navigation';
import Home from './Home/Home';
import Footer from './Footer/Footer';
import "./App.css";

export default function App() {
  return (
    <div className="main">
        <Navigation/>
        <Home/>
        <Footer/>
    </div>
  )
}
