import { useEffect, useState } from "react";
import { TwitchChat, TwitchPlayer } from "react-twitch-embed";

function TwitchFrame({ url = 'https://api.twitch.tv/helix/streams', userID = '466120052'}) {
    const [live, setLive] = useState(false)
    const [channel, setChannel] = useState('sirariedo')

    const token = '9ankh9otrnvleiiaxi3rvp4b9qxmbz'

    useEffect(() => {
        const URI = url + (userID !== '' ? `?user_id=${userID}` : '')
        fetch(URI, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Client-Id': '9q38vwmw39dbre4hzrr9bxx6dgs5n5',
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => response.json())
        .then(
            data => {
                console.log(data)
                setLive(data.data.length > 0)
                data.data.length > 0 ? setChannel(data.data[0].user_name) : setChannel('sirariedo')
            }
        )
        
        if (document.readyState === 'complete') {
            console.log('entrou');
            const offline = document.getElementsByClassName('offline-embeds');
            console.log(offline)
        }

    }, [ url, userID ])
    

    return (
        <div className="flex flex-row max-lg:flex-col">
            <div className="h-[550px] w-full max-lg:h-[250px]">
                <TwitchPlayer className="" width='100%' height='100%' channel={channel} />
            </div>
            { live ? (
                <TwitchChat className="max-lg:w-full h-[550px]" channel={channel} />
            ) : ('')}
        </div>
    )
}

export default TwitchFrame