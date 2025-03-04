import React from "react";
import styles from './App.module.scss'
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router";
import Services from "./pages/Services/Services";
import Portfolio from "./pages/Portfolio/Portfolio";
import Reviews from "./pages/Reviews/Reviews";
import Courses from './pages/Courses'
function App() {
  return (
    <div className={styles.app}>
        
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/portfolio" element={<Portfolio/>}/>
            <Route path="/reviews" element={<Reviews/>}/>
            <Route path="/courses" element={<Courses/>}/>
        </Routes>
    </div>
  );
}

export default App;


// rafce