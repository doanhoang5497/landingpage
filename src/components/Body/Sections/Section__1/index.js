import React from 'react'
import './Section__1.css'

export default function Index() {
    const info = [
        {
            src: 'security-card',
            title: 'Highest Fixed APY in Crypto',
            percent: '383,025.80%'
        },
        {
            src: 'security-card',
            title: 'Low Risk',
            percent: 'With Safuu Insurance Fund (SIF)'
        },
        {
            src: 'moneys',
            title: 'Interest Paid',
            percent: 'Every 15 Minutes: 96 Times Daily!'
        },
        {
            src: 'wallet-check',
            title: 'Automatic Staking',
            percent: 'and Compounding in Your Wallet!'
        }
    ]
    const imgtaitro = ['taitro1', 'taitro2', 'taitro3', 'taitro4']
    return (
        <div className='section__1'>
            <div className='section__1-title'>
                <div>The Highest Paying</div>
                <div>Auto Staking & Auto</div>
                <div className='section__1-title-gradien'>Compounding Protocol</div>
            </div>
            <div className='section__1-wrapcontent'>
                {info.map((item, id) => (
                    <div key={id}>
                        <div className='section__1-content' key={item.title}>
                            <img src={require(`../../../../icon/${item.src}.png`)} alt='background' />
                            <div className='section__1-content-txt'>
                                <div>{item.title}</div>
                                <span>{item.percent}</span>
                            </div>
                        </div>
                    </div>
                ))}
                <div className='section__1-buy'>
                    <span>Click here to buy</span>
                    <img src={require(`../../../../icon/Vector.png`)} alt='background' />
                </div>
            </div>
            <div className='section__1-taitro'>
                {imgtaitro.map(item =>
                    <img key={item} src={require(`../../../../icon/${item}.png`)} alt='taitro' />
                )}
            </div>
        </div>
    )
}
