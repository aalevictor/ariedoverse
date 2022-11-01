import React from "react";
import { Route, BrowserRouter, Routes as Routers } from "react-router-dom";

import Home from "./screens/Home";

import { Routes as BAL } from './screens/BAL/Routes';
import { Routes as BAP } from './screens/BAP/Routes';

const Routes = () => {
    return(
        <BrowserRouter>
            <Routers>
                <Route element={<Home />} exact path="/" />
                {BAL.map(bal => {
                    return <Route element={bal.element} exact path={`/bal${bal.path}`} />
                })}
                {BAP.map(bap => {
                    return <Route element={bap.element} exact path={`/bap${bap.path}`} />
                })}
            </Routers>
        </BrowserRouter>
    )
}

export default Routes;