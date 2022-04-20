import React from 'react'
import './Section__3.css'

export default function Index() {


    return (
        <div className='Section__3'>
            <div className='Section__3-howit'>
                <div className='Section__3-howit-left'>
                    How it
                    <span>
                        WORKS
                    </span>
                </div>
                <div className='Section__3-howit-right'>
                    <div className='Section__3-howit-right-content-top'>
                        <div className='Section__3-howit-right-content'>
                            <img src={require(`../../../../icon/refresh-circle.png`)} alt='refresh' />
                            Auto-Compounding
                            <p>
                                Crypto’s Highest Paying Auto-Staking and Auto-Compounding Protocol with the greatest fixed APY in the industry of 382,945%.
                                Interest rewards are compounded every 15 minutes for every BSC wallet holding any $SAFUU tokens.
                            </p>
                        </div>
                        <div className='Section__3-howit-right-content'>
                            <img src={require(`../../../../icon/refresh-circle.png`)} alt='refresh' />
                            Auto-Compounding
                            <p>
                                Crypto’s Highest Paying Auto-Staking and Auto-Compounding Protocol with the greatest fixed APY in the industry of 382,945%.
                                Interest rewards are compounded every 15 minutes for every BSC wallet holding any $SAFUU tokens.
                            </p>
                        </div>
                    </div>
                    <div className='Section__3-howit-right-content-bot'>
                        <div className='Section__3-howit-right-content'>
                            <img src={require(`../../../../icon/refresh-circle.png`)} alt='refresh' />
                            Auto-Compounding
                            <p>
                                Crypto’s Highest Paying Auto-Staking and Auto-Compounding Protocol with the greatest fixed APY in the industry of 382,945%.
                                Interest rewards are compounded every 15 minutes for every BSC wallet holding any $SAFUU tokens.
                            </p>
                        </div>
                        <div className='Section__3-howit-right-content'>
                            <img src={require(`../../../../icon/refresh-circle.png`)} alt='refresh' />
                            Auto-Compounding
                            <p>
                                Crypto’s Highest Paying Auto-Staking and Auto-Compounding Protocol with the greatest fixed APY in the industry of 382,945%.
                                Interest rewards are compounded every 15 minutes for every BSC wallet holding any $SAFUU tokens.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Section__3-content-wrap'>
                <div className='Section__3-content'>
                    <div>
                        <img src={require(`../../../../icon/banktron.png`)} alt='refresh' />
                        <div>Insurance Fund <span>SIF</span></div>
                        <span>How It Works</span>
                        <p>5% of all trading fees are stored in the Safuu Insurance Fund
                            which helps sustain and back the staking rewards provided by the positive rebase.
                        </p>
                        <div className='Section__3-content-table'>
                            Keeps holders safe by
                            <div>
                                <img src={require(`../../../../icon/ticktrue.png`)} alt='refresh' />
                                <span>Avoiding flash crash through price stability.</span>
                            </div>
                            <div>
                                <img src={require(`../../../../icon/ticktrue.png`)} alt='refresh' />
                                <span>Achieving long term sustainability and future growth of Protocol.</span>
                            </div>
                            <div>
                                <img src={require(`../../../../icon/ticktrue.png`)} alt='refresh' />
                                <span>Greatly reducing downside risk.</span>
                            </div>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
                <div className='Section__3-content'>
                    <div>
                        <img src={require(`../../../../icon/firetron.png`)} alt='refresh' />
                        <div>The Fire <span>Pit</span></div>
                        <span>How It Works</span>
                        <p>2.5% of all $SAFUU traded are burnt in the Fire Pit.
                            The more that is traded, the more get put into the fire causing the fire pit to grow in size,
                        </p>
                        <div className='Section__3-content-table'>
                            Burns Token Supply to
                            <div>
                                <img src={require(`../../../../icon/ticktrue.png`)} alt='refresh' />
                                <span>Prevent circulating supply getting out of hand and becoming unmanageable.</span>
                            </div>
                            <div>
                                <img src={require(`../../../../icon/ticktrue.png`)} alt='refresh' />
                                <span>Offset positive rebase interest printing.</span>
                            </div>
                            <div>
                                <img src={require(`../../../../icon/ticktrue.png`)} alt='refresh' />
                                <span>Greatly reducing downside risk.</span>
                            </div>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
            <div className='Section__3-info'>
                <div className='Section__3-info-Safuu'>
                    Safuu Auto
                    <span>
                        Liquidity Engine <span>(<span>SALE</span>)</span>
                    </span>

                </div>
                <p>Every 48 hours our Safuu Auto-Liquidity Engine (SALE) will inject automatic liquidity into the market.
                    On each buy or sell order there is a 4% tax fee that automatically gets stored into an Auto-LP wallet
                    and built into our protocol’s smart contract is the mechanism which smartly takes the 50% of the amount
                    of SAFUU stored in the wallet, and will automatically buy BNB at the current market price.</p>
                <img src={require(`../../../../icon/img-dolar.png`)} alt='refresh' />
                <div className='Section__3-info-content'>
                    <div className='Section__3-info-content-left'>
                        The SALE will do this every 48 hours by adding more and more liquidity to the pool which will allow
                        $SAFUU token holders to easily sell their tokens at anytime with little to no market slippage.
                        It will also aid in maintaining protocol stability to make sure the APY is upheld for the entire life of Safuu.
                    </div>
                    <div className='Section__3-info-content-right'>
                        <div>
                            <img src={require(`../../../../icon/ticktrue.png`)} alt='refresh' />
                            <span>Prevent circulating supply getting out of hand and becoming unmanageable.</span>
                        </div>
                        <div>
                            <img src={require(`../../../../icon/ticktrue.png`)} alt='refresh' />
                            <span>Offset positive rebase interest printing.</span>
                        </div>
                        <div>
                            <img src={require(`../../../../icon/ticktrue.png`)} alt='refresh' />
                            <span>Greatly reducing downside risk.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
