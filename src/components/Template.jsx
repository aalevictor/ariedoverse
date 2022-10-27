import React from 'react';
import {Body} from './Body';
import {Content} from './Content';
import Navbar from './Navbar';

const Template = (props) =>{
  return (
    <Body>
        <Navbar />
        <Content>
            {props.children}
        </Content>
    </Body>
  )
}

export default Template;