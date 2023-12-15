import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/headers/Navbar/Navbar'
import Banner from './components/headers/Banner/Banner'
import Bar from './components/headers/bar/Bar'
import Footer from './components/footer/Footer/Footer'


import Home from './pages/Home/Home'
import Berita from "./pages/berita_muslim/Berita";
import Baitul from './pages/baitul/baitulPage';
import Mstyle from './pages/M_style/Mstyle';
import Mullaf from './pages/Muallaf/Mullaf';
import Love from './pages/Love/Love';
import Halal from './pages/Halal/Halal';
import ClipVideo from './pages/Clip_Video/Clip_Video';
import Portfolio from './pages/Portfolio/Portfolio';


type Props = {}

const App = (props: Props) => {
  return (
    <>
      <Banner />
      <Bar />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/berita" element={<Berita />} />
          <Route path="/baitul" element={<Baitul />} />
          <Route path="/mstyle" element={<Mstyle />} />
          <Route path="/muallaf" element={<Mullaf />} />
          <Route path="/love" element={<Love />} />
          <Route path="/halal" element={<Halal />} />
          <Route path="/clipvideo" element={<ClipVideo />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </Router>
      
    </>
  );
}

export default App