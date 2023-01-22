import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { AppRoutes } from "./routes";
import PrivateRouter from "./privateRouter";

import {
  NotFound,
  Dashboard,
  Login
} from './../screens';

const RouterApp = (props) => {
  
  return (
    <BrowserRouter>
      <Routes>

        {/* Dashboard Route */}
        <Route path={AppRoutes.dashboard} element={
          <PrivateRouter path={AppRoutes.dashboard}>
            <Dashboard />
          </PrivateRouter>
        } />

        {/* Login Route */}
        <Route path={AppRoutes.login} element={<Login />} />

        {/* For unknow/non-defined path */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterApp;
