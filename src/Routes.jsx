import React from "react";
import { Route, BrowserRouter, Routes as Routers } from "react-router-dom";

import Home from "./screens/Home";

import { Routes as BAL } from './screens/BAL/Routes';

const Routes = () => {
    return(
        <BrowserRouter>
            <Routers>
                <Route element={<Home />} exact path="/" />
                {/* <Route element={<Players />} path="/bal/players" /> */}
                {BAL.map(bal => {
                    return <Route element={bal.element} path={`/bal${bal.path}`} />
                })}
                <Route element={<Home />} exact path="/" />
            </Routers>
        </BrowserRouter>
    )
}

export default Routes;