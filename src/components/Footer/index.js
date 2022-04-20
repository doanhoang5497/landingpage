import React from 'react'
import './Footer.css'

export default function Index() {
    return (
        <div className='Footer'>
            <div className='Footer-keep'>
                <div>Keep in <span>touch</span></div>
                <div className='Footer-img'>
                    <img src={require(`../../icon/Twitter - Dark.png`)} alt='buy' />
                    <img src={require(`../../icon/Discord - Dark.png`)} alt='buy' />
                    <img src={require(`../../icon/Reddit - Light.png`)} alt='buy' />
                    <img src={require(`../../icon/Telegram - Light.png`)} alt='buy' />
                    <img src={require(`../../icon/Github - Light.png`)} alt='buy' />
                </div>
            </div>
            <div className='Footer-copyright'>Copyright © 2022</div>
        </div>
    )
}
