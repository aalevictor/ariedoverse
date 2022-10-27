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
        <div className='max-w-[1024px] mx-auto py-8 px-2 max-lg:px-8 text-xl font-black text-offwhite'>
            { !live ? (
                <TwitchEmbed channel='sirariedo' />
            ) : ('')}
		</div>
    )
}

export default TwitchFrame