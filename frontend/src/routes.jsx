import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Explore, Login, Account } from './components';

const Path = () => {
  return (
    <Routes>
      <Route path="/explore" Component={Explore} />
      <Route path="/login" Component={Login} />
      <Route path="/Account" Component={Account} />
      {/**<Route path="/404">
        <NotFountPage />
      </Route>
  <Redirect to="/404" />*/}

    </Routes>
  );
};

export default Path;
