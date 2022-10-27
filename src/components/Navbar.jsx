import { Text } from './Text'
import { SoccerBall, Suitcase, UserCircle } from 'phosphor-react'
import { Header } from './Header'

function Navbar() {
  	return (
		<Header.Root>
			<Header.Item link='/bal/players'>
				<SoccerBall size={20} />
				<Text size='text-sm' className='text-offwhite font-semibold'>BAL</Text>
			</Header.Item>
			<Header.Item>
				<Suitcase size={20} />
				<Text size='text-sm' className='text-offwhite font-semibold'>BAP</Text>
			</Header.Item>
			<Header.Item>
				<UserCircle size={20} />
				<Text size='text-sm' className='text-offwhite font-semibold'>aalevictor</Text>
			</Header.Item>
		</Header.Root>	
  	)
}

export default Navbar