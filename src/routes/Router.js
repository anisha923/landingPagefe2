import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignUp from "../auth/SignUp";
import HomePage from "../auth/HomePage";
import Header from "../auth/Header";


export const Router = () => {
  const otpClick = () =>{
    
  }
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SignUp} onClick ={otpClick} />
        <Route exact path="/home" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
};
