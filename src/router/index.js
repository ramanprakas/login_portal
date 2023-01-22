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
  Login,
} from './../screens';
import Events from "../screens/events/events";

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
        <Route path={AppRoutes.events} element={
          <PrivateRouter path={AppRoutes.events}>
            <Events />
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
