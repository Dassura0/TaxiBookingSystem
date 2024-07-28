import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./../Components/HomePage";
import UserSignInPage from "./../Components/UserSignInPage";
import NotFoundPage from "./../Components/NotFoundPage";
import ToolBar from "./../Components/Toolbar";
import LoginPage from "./../Components/LoginPage";
import MapPage from "./../Components/MapPage";
import AdminRoutes from "../Components/AdminDashBoared/AdminRoutes";

const AppRouter = () => {
  const [modalType, openBasicModal] = useState(undefined);
  if (modalType) {
    localStorage.setItem("openModal", modalType);
  }
  if (window.location.pathname === '/') {
    localStorage.removeItem('openModal')
  }
  return (
    <BrowserRouter>
    <div>
        <ToolBar openBasicModal={openBasicModal} />
        <Switch>
          <Route path="/" component={HomePage} exact={true} />
          <Route path="/UserSignIn" component={UserSignInPage} />
          <Route path="/DriverSignIn" component={HomePage} />
          <Route path="/Login" component={LoginPage} />
          {/* <Route path="/help" component={HelpPage} /> */}
          <Route path="/map" component={MapPage} />
          {/* <Route path="/admin/info" component={AdminInfo} /> */}
          <Route path="/adminDashboard/cabs" component={AdminRoutes} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
