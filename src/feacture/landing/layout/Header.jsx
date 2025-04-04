import React from 'react'
import { Link } from "react-router-dom"
import Logo from '/logo.webp'
import { IconShuriken } from '../../../assets/icons/Icons'


export const Header = () => {
    return(
        <header className='fixed w-full p-[10px]'>
            <nav className='max-w-[1400px] flex justify-between items-center px-[10px] mx-auto'>
                <ul>
                    <li>
                        <Link to="/">
                            <img className='w-[150px]' src={Logo} alt="logo shippuden" />
                        </Link>
                    </li>
                </ul>
                <ul className='flex gap-[20px]'>
                    <li>
                        <Link className='flex items-center gap-[10px]' to="/">
                            <IconShuriken />
                            Api
                        </Link>
                    </li>
                    <li>
                        <Link className='flex items-center gap-[10px]' to="/">
                            <IconShuriken />
                            acerca de
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}