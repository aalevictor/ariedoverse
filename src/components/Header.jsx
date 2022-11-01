// import logo from "../assets/logo2.png";
import { useState } from "react";
import { List, UserCircle } from 'phosphor-react';
import logo from '../assets/logo2.png';
import clsx from "clsx";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import * as Avatar from '@radix-ui/react-avatar';

export function HeaderRoot({ children }) {
	const user = (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger className="my-auto align-middle">
                <Avatar.Root>
                    <Avatar.Image src='' className="w-8 rounded-[16px] outline-none" alt='avatar' />
                    <Avatar.Fallback delayMs={600} className="w-8 object-cover rounded-[16px] outline-none text-offwhite"><UserCircle size={32} /></Avatar.Fallback>
                </Avatar.Root>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
                <DropdownMenu.Content className='bg-blue-3 py-2 z-50 rounded text-offwhite uppercase text-center px-3 border border-offwhite mt-[-1px] w-full min-w-[128px]'>
                    <DropdownMenu.Arrow className="fill-offwhite"></DropdownMenu.Arrow>
                    <DropdownMenu.Item className='w-full py-2 px-1 hover:bg-blue-1 hover:bg-opacity-20 transition-opacity outline-none rounded cursor-pointer'>login</DropdownMenu.Item>
                    <DropdownMenu.Item className='w-full py-2 px-1 hover:bg-blue-1 hover:bg-opacity-20 transition-opacity outline-none rounded cursor-pointer'>conta</DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
	)

    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <>
            <nav className="sticky flex flex-wrap items-center justify-between px-2 py-1 bg-blue-3 top-0 z-40">
                <div className="container lg:px-8 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex items-center justify-between lg:w-auto lg:static lg:block lg:justify-start py-4 px-3 gap-1">
                        <button
                            className="text-offwhite cursor-pointer leading-none border border-solid border-transparent rounded block lg:hidden"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <List size={30} />
                        </button>
                        <a href="/" className='hover:opacity-80'>
                            <img src={logo} className='max-h-8' alt=''/>
                        </a>
                        <div title="Usuário" className='lg:hidden'>
                            {user}
                        </div>
                    </div>
                    <div
                        className={
                            "lg:flex items-center max-lg:w-full gap-[3px]" + (navbarOpen ? " flex" : " hidden")
                        }
                    >
                        <ul className="flex flex-col py-2 px-2 lg:flex-row lg:ml-auto w-full">
                            { children }
                        </ul>
                        <div className="max-lg:hidden">{user}</div>
                    </div>
                </div>
            </nav>
        </>
    )
}

HeaderRoot.displayName = 'Header.Root'

export function HeaderItem({ children, link='#', title, className='' }) {
    const Comp = link === '#' ? 'div' : 'a'
    
    return (
        <li className={clsx(
            "nav-item cursor-pointer inset-0"
        )}>
            <Comp
                className={clsx(
                    "py-2 flex items-center font-bold leading-snug rounded uppercase text-offwhite hover:bg-blue-1 hover:bg-opacity-20 transition-opacity outline-none focus:ring-2 ring-offwhite lg:p-1",
                    className
                )}
                href={link}
                title={title}
            >
                <div className='h-full px-2 flex flex-row gap-2'>
                    { children }
                </div>
            </Comp>
        </li>
    )
}

HeaderItem.displayName = 'Header.Item'

export const Header = {
    Root: HeaderRoot,
    Item: HeaderItem,
}

