import React from 'react';
import {Body} from '../components/Body';
import Navbar from '../components/Navbar';
import TwitchFrame from '../components/TwitchFrame';

const Home = () =>{
  return (
    <Body>
        <Navbar />
        <TwitchFrame userID='466120052' />
    </Body>
  )
}

export default Home;