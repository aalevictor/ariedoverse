import { Slot } from "@radix-ui/react-slot";
import { useEffect, useState } from "react";
import { TwitchEmbed } from "react-twitch-embed";
// import ariedo from '../assets/ariedo.png';

function TwitchFrame({ url = 'https://api.twitch.tv/helix/streams', userID = '466120052', token}) {
    const [live, setLive] = useState(false)

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
            }
        )
    }, [ url, token, userID ])
    

    return (
        <Slot className="rounded-md w-fit overflow-clip mx-auto">
            { !live ? (
                <TwitchEmbed channel='sirariedo' />
            ) : ('')}
        </Slot>
    )
}

export default TwitchFrame