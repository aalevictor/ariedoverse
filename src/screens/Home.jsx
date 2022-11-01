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
            text="Be a Legend (Seja uma lenda) é um RPG onde você será o mais novo jogador dentro da base de dados do Football Manager, vai poder escolher sua posição, principais características e até sua nacionalidade pra levá-lo a glória (ou fracasso)!"
            footer="Entre pro time"
            link="/bal"
          />
          <Card
            icon={<Suitcase size={50} weight="duotone" />}
            title="BAP"
            text="Be a President (Seja o presidente) é uma variante do BAL, mas aqui você vai entrar pro mundo dos negócios, administrar seu time contratando os melhores jogadores, jovens promessas, treinadores e até melhorando suas instalações. Mas lembre-se: Amigos, amigos..."
            footer="... Negócios a parte"
            link="/bap"
          />
        </Content>
    </Body>
  )
}

export default Home;