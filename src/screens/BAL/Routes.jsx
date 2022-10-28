import React from "react";
import Players from "./Players";
import PlayersList from "./PlayersList";

const Routes = [{
    'element': <PlayersList />,
    'path': '/players/list'
},{
    'element': <Players />,
    'path': '/players'
}]

export { Routes }