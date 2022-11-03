import React from "react";
import { Route, BrowserRouter, Routes as Routers } from "react-router-dom";

import Home from "./screens/Home";

import { Routes as BAL } from './screens/BAL/Routes';
import { Routes as BAP } from './screens/BAP/Routes';
import Login from "./screens/Login";
import Register from "./screens/Register";

const Routes = () => {
    return(
        <BrowserRouter>
            <Routers>
                <Route element={<Home />} exact path="/" />
                <Route element={<Login />} exact path="/login" />
                <Route element={<Register />} exact path="/register" />
                {BAL.map(item => {
                    return <Route element={item.element} exact path={`/bal${item.path}`} />
                })}
                {BAP.map(item => {
                    return <Route element={item.element} exact path={`/bap${item.path}`} />
                })}
            </Routers>
        </BrowserRouter>
    )
}

export default Routes;