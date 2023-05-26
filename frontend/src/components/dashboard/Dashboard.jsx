import React from 'react';

import { NavbarDashboard, Hero, Footer, TourCard } from '../../components';
 
console.log("we are getting home");

const Dashboard = () => {

  return (
    <div>
      < NavbarDashboard />
      < Hero />
      < TourCard />
      < Footer />
    </div>
    
  )
}

export default Dashboard;
