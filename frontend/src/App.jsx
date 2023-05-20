import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Navbar, Hero, Footer, TourCard } from './components';
import Path from './routes';

import './index.css';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <div>
          <Navbar />
          <Hero />
        </div>
        <Path />
        <TourCard />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
