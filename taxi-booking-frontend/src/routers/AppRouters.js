import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./../Components/HomePage";
import UserSignInPage from "./../Components/UserSignInPage";
import NotFoundPage from "./../Components/NotFoundPage";
import ToolBar from "./../Components/Toolbar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import LoginPage from "./../Components/LoginPage";
import RidePage from "./../Components/RidePage";
import MapPage from "./../Components/MapPage";
import AdminInfo from "../Components/AdminInfo";

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
      <MuiThemeProvider>
        <ToolBar openBasicModal={openBasicModal} />
        <Switch>
          <Route path="/" component={HomePage} exact={true} />
          <Route path="/UserSignIn" component={UserSignInPage} />
          <Route path="/DriverSignIn" component={HomePage} />
          <Route path="/Login" component={LoginPage} />
          {/* <Route path="/help" component={HelpPage} /> */}
          <Route path="/bookACab" component={RidePage} />
          <Route path="/map" component={MapPage} />
          <Route path="/admin/info" component={AdminInfo} />
          <Route component={NotFoundPage} />
        </Switch>
      </MuiThemeProvider>
    </BrowserRouter>
  );
};

export default AppRouter;
