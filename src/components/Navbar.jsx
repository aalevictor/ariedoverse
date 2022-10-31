// import avatar from '../assets/avatar.jpg';
// import user from '../assets/User.png';
import { SoccerBall, Suitcase, UserCircle } from 'phosphor-react'
import { Header } from './Header'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import * as Avatar from '@radix-ui/react-avatar';
import logo from '../assets/logo2.png';
import { useState } from 'react';
import { List } from 'phosphor-react';

function Drop ({children}) {
	return(
		<DropdownMenu.Root>
			<DropdownMenu.Trigger className='p-0 mb-0'>
				{children}
			</DropdownMenu.Trigger>
			<DropdownMenu.Portal>
				<DropdownMenu.Content className='bg-blue-3 w-fit px-2 py-2 z-50 rounded-b text-offwhite'>
					<DropdownMenu.Item className='w-fit py-1 px-6 hover:bg-blue-1 hover:bg-opacity-20 transition-opacity outline-none rounded cursor-pointer'>Item</DropdownMenu.Item>
					<DropdownMenu.Separator className='bg-offwhite' />
					<DropdownMenu.Item className='w-fit py-1 px-6 hover:bg-blue-1 hover:bg-opacity-20 transition-opacity outline-none rounded cursor-pointer'>Item</DropdownMenu.Item>
					<DropdownMenu.Separator />
					<DropdownMenu.Item className='w-fit py-1 px-6 hover:bg-blue-1 hover:bg-opacity-20 transition-opacity outline-none rounded cursor-pointer'>Item</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Portal>
		</DropdownMenu.Root>
	)
	
}

function Navbar() {
	const [navbarOpen, setNavbarOpen] = useState(false);
	return(
		<nav className="sticky flex flex-wrap items-center justify-between px-2 py-1 bg-blue-3 top-0 z-40">
			<div className="container px-4 mx-auto flex flex-wrap items-center justify-evenly">
				<div className="w-full relative flex items-baseline justify-between lg:w-auto lg:static lg:block lg:justify-start py-4">
					<a href="/" className='hover:opacity-80'>
						<img src={logo} className='max-h-10' alt=''/>
					</a>
					<button
						className="text-offwhite cursor-pointer leading-none border border-solid border-transparent rounded block lg:hidden"
						type="button"
						onClick={() => setNavbarOpen(!navbarOpen)}
					>
						<List size={30} />
					</button>
				</div>
				<div
					className={
						"lg:flex flex-grow items-center" + (navbarOpen ? " flex" : " hidden")
					}
					id="example-navbar-danger"
				>
					<ul className="flex flex-col py-4 lg:flex-row justify-end lg:ml-auto w-full">
						<Header.Item link='/bal/players/list' title="BAL">
							<SoccerBall size={24} />
						</Header.Item>
						<Header.Item title="BAP">
							<Suitcase size={24} />
						</Header.Item>
						{/* <Header.Item title="Login">
						</Header.Item> */}
						<Header.Item title="Usuário">
							<Drop>
								<Avatar.Root>
									<Avatar.Image src='asd' className="w-6 object-cover rounded-[12px] outline-none" alt='avatar' />
									<Avatar.Fallback delayMs={600} className="w-6 object-cover rounded-[12px] outline-none"><UserCircle size={24} /></Avatar.Fallback>
								</Avatar.Root>
							</Drop>
						</Header.Item>
					</ul>
				</div>
			</div>
		</nav>
	)
}
// function Navbar() {
//   	return (
// 		<Header.Root>
// 			<Header.Item link='/bal/players/list' title="BAL">
// 				<SoccerBall size={24} />
// 			</Header.Item>
// 			<Header.Item title="BAP">
// 				<Suitcase size={24} />
// 			</Header.Item>
// 			<Header.Item title="Login">
// 				<Drop>
// 					<Avatar.Root>
// 						<Avatar.Image src='asd' className="w-6 object-cover rounded-[12px] outline-none" alt='avatar' />
// 						<Avatar.Fallback delayMs={600} className="w-6 object-cover rounded-[12px] outline-none"><UserCircle size={24} /></Avatar.Fallback>
// 					</Avatar.Root>
// 				</Drop>
// 			</Header.Item>
// 		</Header.Root>	
//   	)
// }

export default Navbar