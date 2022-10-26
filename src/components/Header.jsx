// import logo from "../assets/logo2.png";
import React from "react";
import { List } from 'phosphor-react';
import logo from '../assets/logo2.png';

export function HeaderRoot({ children }) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <nav className="sticky flex flex-wrap items-center justify-between px-2 py-1 bg-blue-3 top-0 z-40">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
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
                    { children }
                </ul>
            </div>
            </div>
        </nav>
    )
}

HeaderRoot.displayName = 'Header.Root'

export function HeaderItem({ children, link='#' }) {
    return (
        <li className="nav-item">
            <a
                className="px-3 py-2 flex items-center font-bold leading-snug rounded uppercase text-offwhite hover:bg-blue-1 hover:bg-opacity-20 transition-opacity outline-none focus:ring-2 ring-offwhite"
                href={link}
            >
                <div className='gap-2 flex flex-row items-center h-full px-5'>
                    { children }
                </div>
            </a>
        </li>
    )
}

HeaderItem.displayName = 'Header.Item'

export const Header = {
    Root: HeaderRoot,
    Item: HeaderItem,
}

