import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Navbar, Hero, Footer, TourCard } from '..';


const Home = () => {
  return (
    <div>
      < Navbar />
      < Hero />
      < TourCard/>
      < Footer/>
    </div>
  )
}

export default Home;