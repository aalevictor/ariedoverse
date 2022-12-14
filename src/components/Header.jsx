// import logo from "../assets/logo2.png";
import { useState } from "react";
import { List, UserCircle } from 'phosphor-react';
import logo from '../assets/logo2.png';
import clsx from "clsx";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import * as Avatar from '@radix-ui/react-avatar';
import axios from 'axios';
import { useEffect } from "react";

export function HeaderRoot({ children }) {
    const baseURL = 'https://balp-api.herokuapp.com/'
    // const baseURL = 'http://127.0.0.1:8000/'

    const [twitch,  setTwitch]  = useState('')
    const [email,   setEmail]   = useState('')
    const [login,   setLogin]   = useState(false)

    useEffect(() => {
        var url = `${baseURL}refresh`
        try {
            const refresh = sessionStorage.getItem('refresh')
            if (refresh){
                refreshToken(url, refresh)
            }
        } catch {}
    }, )

    function handleLogout() {
        sessionStorage.clear()
        setEmail('')
        setTwitch('')
        setLogin(false)
        window.location.reload()
    }

    function refreshToken(url, refresh) {
        axios({
            method: "post",
            url: url,
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: {
                refresh: refresh
            }
        })
        .then((response) => {
            if (response.status === 200){
                sessionStorage.setItem('access', response.data.access)
                getUserData(response.data.access)
            } else {
                handleLogout()
                window.location.href = "/login"
            }
        });
    }

    function getUserData(access) {
        var url = `${baseURL}check`
        axios({
            method: "get",
            url: url,
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + access
            }
        })
        .then((response) => {
            if (response.status === 200){
                setEmail(response.data.email)
                setTwitch(response.data.twitch)
                console.log(email)
                setLogin(true)
            }
        });

    }

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
                    {
                        login ? (
                            <>
                                <a href='/account'><DropdownMenu.Item className='w-full py-2 px-1 hover:bg-blue-1 hover:bg-opacity-20 transition-opacity outline-none rounded cursor-pointer'>{twitch}</DropdownMenu.Item></a>
                                <div onClick={handleLogout}><DropdownMenu.Item className='w-full py-2 px-1 hover:bg-blue-1 hover:bg-opacity-20 transition-opacity outline-none rounded cursor-pointer'>sair</DropdownMenu.Item></div>
                            </>
                            ) : (
                            <>
                                <a href='/login'><DropdownMenu.Item className='w-full py-2 px-1 hover:bg-blue-1 hover:bg-opacity-20 transition-opacity outline-none rounded cursor-pointer'>login</DropdownMenu.Item></a>
                                <a href='/register'><DropdownMenu.Item className='w-full py-2 px-1 hover:bg-blue-1 hover:bg-opacity-20 transition-opacity outline-none rounded cursor-pointer'>cadastro</DropdownMenu.Item></a>
                            </>
                        )
                    }
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
	)

    const [navbarOpen, setNavbarOpen] = useState(true);
    return (
        <>
            <nav className="sticky flex flex-wrap items-center justify-between px-2 py-1 bg-blue-3 top-0 z-40">
                <div className="container lg:px-8 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex items-center justify-between lg:w-auto lg:static lg:block lg:justify-start py-4 px-3 gap-1">
                        <button
                            className="text-offwhite cursor-pointer leading-none border border-solid border-transparent rounded block lg:hidden"
                            type="button"
                            onClick={() => {
                                setNavbarOpen(!navbarOpen)
                                console.log(navbarOpen)
                            }}
                        >
                            <List size={30} />
                        </button>
                        <a href="/" className='hover:opacity-80'>
                            <img src={logo} className='max-h-8' alt=''/>
                        </a>
                        <div title="Usu??rio" className='lg:hidden'>
                            {user}
                        </div>
                    </div>
                    <div
                        className={
                            "lg:flex items-center max-lg:hidden gap-[3px]"
                        }
                    >
                        <ul className="flex flex-col py-2 px-2 lg:flex-row lg:ml-auto w-full">
                            { children }
                        </ul>
                        <div className="max-lg:hidden">{user}</div>
                    </div>
                </div>
            </nav>
            <HeaderSidebar show={navbarOpen}>{children}</HeaderSidebar>
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
                    "py-2 flex items-center font-bold leading-snug rounded uppercase text-offwhite hover:bg-blue-1 hover:bg-opacity-20 transition-opacity outline-none focus:ring-2 ring-offwhite lg:p-1 max-lg:pr-16",
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

export function HeaderSidebar({show=false, children}) {
    const hidden = show ? ' hidden' : ' flex'
    return (
        <div className={clsx(hidden)}>
            <div className="top-16 left-0 w-fit bg-blue-3 text-offwhite fixed h-full lg:hidden z-50">
                <ul className="flex flex-col py-2 px-2 w-full">
                    {children}
                </ul>
            </div>
        </div>
    )
}

HeaderSidebar.displayName = 'Header.Sidebar'

export const Header = {
    Root: HeaderRoot,
    Item: HeaderItem,
    Sidebar: HeaderSidebar
}

