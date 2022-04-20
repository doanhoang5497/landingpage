import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

export default function Index() {
    return (
        <div className='Nav'>
            <div className='Nav-menu'>
                <Link to={'/'}>
                    <img src={require('../../../image/logo.png')} alt='logo' />
                </Link>
                <div className='Nav-menu-li'>
                    <Link className='Nav-menu-li-color' to={'/dashboard'}>
                        <img  src={require('../../../icon/favorite-chart.png')} alt='logo' />
                        Dashboard
                    </Link>
                </div>
                <div className='Nav-menu-li'>
                    <Link to={'/presale'}>
                        <img src={require('../../../icon/receipt-discount.png')} alt='logo' />
                        Presale
                    </Link>

                </div>
                <div className='Nav-menu-li'>
                    <img src={require('../../../icon/profile-circle.png')} alt='logo' />
                    Account
                </div>
                <div className='Nav-menu-li'>
                    <img src={require('../../../icon/calculator.png')} alt='logo' />
                    Calculator
                </div>
                <div className='Nav-menu-li'>
                    <img src={require('../../../icon/repeat-circle.png')} alt='logo' />
                    Swap
                </div>
                <div className='Nav-menu-li'>
                    <img src={require('../../../icon/document-text.png')} alt='logo' />
                    Doc
                </div>
            </div>
            <div className='Nav-menu-img'>
                <img src={require(`../../../icon/Twitter - Dark.png`)} alt='buy' />
                <img src={require(`../../../icon/Discord - Dark.png`)} alt='buy' />
                <img src={require(`../../../icon/Reddit - Light.png`)} alt='buy' />
                <img src={require(`../../../icon/Telegram - Light.png`)} alt='buy' />
                <img src={require(`../../../icon/Github - Light.png`)} alt='buy' />
            </div>
        </div>
    )
}
