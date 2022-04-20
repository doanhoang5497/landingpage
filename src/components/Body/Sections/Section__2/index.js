import React from 'react'
import './Section__2.css'


export default function Index() {
    return (
        <div className='Section__2'>
            <div className='Section__2-title'>
                <img src={require(`../../../../icon/scanning.png`)} alt='scanning' />
                <div className='Section__2-title-txt'>
                    Safuu Auto-Staking
                    <span>Protocol</span>
                </div>
            </div>
            <div className='Section__2-about'>
                <div>ABOUT</div>
                <p>
                    Safuu provides a decentralized financial asset which rewards users with a sustainable fixed compound interest model through use of it’s unique SAP protocol.
                </p>
            </div>
            <div className='Section__2-percent'>
                <div className='Section__2-percent-content'>
                    383,025.80%
                    <span>Fixed Staking APY</span>
                </div>
            </div>
            <div className='Section__2-contract'>
                CONTRACT
                <span>
                    0xE5bA47fD94CB645ba4119222e34fB33F59C7CD90
                </span>
            </div>
            <div className='Section__2-content'>
                <img src={require(`../../../../image/wavee2.png`)} alt='scanning' />
                <div className='Section__2-content-txt'>
                    ʻʻ All Safuu holders are rewarded with automatic
                    <span> compound interest which is paid</span>
                    <span className='Section__2-content-txt-gradien'> every  15 minutes.</span> ʼʼ
                </div>
            </div>
            <div className='Section__2-howmuch'>
                <div className='Section__2-howmuch-top'>
                    How much can I earn?
                    <div className='Section__2-howmuch-top-right'>
                        <span>At the end of the year and with</span>
                        $1,000 USD
                        <span>of $SAFUU invested</span>
                    </div>
                </div>
                <div className='Section__2-howmuch-bot'>
                    <div className='Section__2-howmuch-bot-left'>
                        <span>You can earn up to</span>
                        <div className='Section__2-howmuch-bot-left-gradien'>
                            $3,830,454.12 USD
                        </div>
                        <span>$SAFUU at 383,025.80% APY*.</span>
                        <p>*Earnings are calculated in a scenario
                            where the SAP sustains the rebase interest for 365 days.
                        </p>
                    </div>
                    <div className='Section__2-howmuch-bot-right'>
                        <span>
                        Launch the App
                        </span>
                        <img src={require(`../../../../icon/Vector.png`)} alt='scanning' />
                    </div>
                </div>
            </div>
        </div>
    )
}
