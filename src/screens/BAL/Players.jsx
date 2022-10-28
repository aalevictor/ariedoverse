import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Template from '../../components/Template';
import { Player } from '../../components/Player';

const Players = () =>{
    
    const [players, setPlayers] = useState([])
    const [found, setFound] = useState(false)
    const [searchParams, ] = useSearchParams();

    const baseURL = 'https://balp-api.herokuapp.com/'

    useEffect(() => {
        var url = `${baseURL}bal/players`
        if (searchParams.get('id')){
            
            url += searchParams.get('id') ? `/${searchParams.get('id')}` : ''

            fetch(url)
            .then(response => response.json())
            .then(
                data => {
                    setPlayers(data)
                }
            )
            
            setFound(players.length > 0)
        }
    }, [ searchParams, players ])
    return (
        <Template>
            {players.map(player => {
                return (
                    <Player.Root>
                        <Player.Header player={player} />
                        <Player.Content player={player} />
                    </Player.Root>
                )
            })}
        </Template>
    )
}

export default Players;