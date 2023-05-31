import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignUp from "../auth/SignUp";


export const Router = () => {
  const otpClick = () =>{
    
  }
  return (
    <BrowserRouter basename = '/Medical-Insurance'>
      <Switch>
        <Route exact path="/" component={SignUp} onClick ={otpClick} />

      </Switch>
    </BrowserRouter>
  );
};
