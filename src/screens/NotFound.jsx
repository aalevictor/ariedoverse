import React from 'react';
import {Body} from '../components/Body';
import Card from '../components/Card';
import { Content } from '../components/Content';
import Navbar from '../components/Navbar';

const NotFound = () =>{
  return (
    <Body>
        <Navbar />
        <Content className='flex flex-wrap gap-4 mx-auto'>
          <Card
            title="Página não encontrada"
            text="Essa página não foi encontrada, verifique o link digitado!"
            footer="Voltar para tela inicial"
            link="/"
          />
        </Content>
    </Body>
  )
}

export default NotFound;