import { SoccerBall, Suitcase } from 'phosphor-react'
import { Header } from './Header'
function Navbar() {
  	return (
		<Header.Root>
			<Header.Item link='/bal/players/list' title="BAL">
				<SoccerBall size={24} />
				<span className='lg:hidden'>BAL</span>
			</Header.Item>
			<Header.Item title="BAP">
				<Suitcase size={24} />
				<span className='lg:hidden'>BAP</span>
			</Header.Item>
		</Header.Root>	
  	)
}

export default Navbar