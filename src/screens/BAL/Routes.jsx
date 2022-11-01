import React from "react";
import Index from "./Index";
import Players from "./Players";
import PlayersList from "./PlayersList";

const Routes = [{
    'element': <Index />,
    'path': ''
},{
    'element': <PlayersList />,
    'path': '/players/list'
},{
    'element': <Players />,
    'path': '/players'
}]

export { Routes }