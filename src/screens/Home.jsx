import { SoccerBall, Suitcase } from 'phosphor-react';
import React from 'react';
import {Body} from '../components/Body';
import Card from '../components/Card';
import { Content } from '../components/Content';
import Navbar from '../components/Navbar';
import TwitchFrame from '../components/TwitchFrame';

const Home = () =>{
  return (
    <Body>
        <Navbar />
        <TwitchFrame userID='466120052' />
        <Content className='flex flex-wrap gap-4 mx-auto'>
          <Card
            icon={<SoccerBall size={50} weight="duotone" />}
            title="BAL"
            text="Be A Legend (Seja uma lenda) é um RPG onde você será o mais novo jogador dentro da base de dados do Football Manager, vai poder escolher sua posição, principais características e até sua nacionalidade pra levá-lo a glória (ou fracasso)!"
            footer="Entre pro time"
            link="/bal"
          />
          <Card
            icon={<Suitcase size={50} weight="duotone" />}
            title="BAP"
            text="O Be A President (Seja um presidente) é o maior experimento social de Football Manager do mundo, ou não! Basicamente um RPG de Futebol, onde cada jogador interpreta o presidente de equipes das cinco grandes ligas européias. Eles podem influenciar nos aspectos financeiros e de comissão da equipe, entretanto, não podem mexer na tática. O resultado? Criação de conteúdo e caos."
            footer="Junte-se ao Caos"
            link="/bap"
          />
        </Content>
    </Body>
  )
}

export default Home;