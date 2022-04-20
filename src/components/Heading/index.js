import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Heading.css'
export default function Index() {
    const menu = [
        {
            title: 'faq',
            url: "/faq"
        },
        {
            title: 'whitepaper',
            url: "/whitepaper"
        },
        {
            title: 'discord',
            url: "/discord"
        },
        {
            title: 'open app',
            url: "/dashboard"
        }
    ]
    const [actMenu, setActMenu] = useState('open app')

    return (
        <div className='header'>
            <div className="header__logo">
                <img src={require('../../image/logo.png')} alt='logo' />
            </div>
            <div className="header__menu">
                <ul>
                    {menu.map(item =>
                        <li key={item.url}>
                            <Link className={actMenu == item.title
                                ? 'active'
                                : 'unactive'
                            }
                            to={`${item.url}`}
                            >
                                {item.title}
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}
