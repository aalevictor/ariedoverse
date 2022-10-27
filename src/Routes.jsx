import React from "react";
import { Route, BrowserRouter, Routes as Routers } from "react-router-dom";

import Home from "./screens/Home";
import Players from "./screens/Players";


const Routes = () => {
    return(
        <BrowserRouter>
            <Routers>
                <Route element={<Home />} exact path="/" />
                <Route element={<Players />} path="/bal/players" />
            </Routers>
        </BrowserRouter>
    )
}

export default Routes;