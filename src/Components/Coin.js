import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import '../Coin.css'

const Coin = ({ image, name, symbol, price, volume, priceChange, marketcap }) => {
    return (
        <div className='coin-container'>
                <section className='title'>
                    <img src={image} alt="" />
                    <h1>{name}</h1>
                </section>
            <div className="content">
                <Carousel centerSlidePercentage={true} class="carolsel" showStatus={false}>
                    <div>
                        <p className='info'>$ {price}</p>
                        <p className="description">Price</p>
                    </div>
                    <div>
                        <p className='info'>${volume.toLocaleString()}</p>
                        <p className="description">Volume</p>
                    </div>
                    <div>
                        {
                            priceChange < 0 ? (
                                <p className='info red'>{priceChange.toFixed(2)}%</p>)
                                :
                                (
                                    <p className="info green">{priceChange.toFixed(2)}%</p>
                                )
                        }
                        <p className="description">Percentage</p>
                    </div>
                    <div>
                        <p className='info'>${marketcap.toLocaleString()}</p>
                        <p className='description'>Mkt Cap</p>
                    </div>
                    <div>

                    </div>
                </Carousel>
            </div>
        </div>
    )
}

export default Coin

{/* <div className="coin-row">
    <div className="coin">
        <img src={image} alt="crypto" />
        <h1>{name}</h1>
        <p className="coin-symbol">{symbol}</p>
    </div>
    <div className="coin-data">
        <p className="coin-price">${price}</p>
        <p className="coin-volume">${volume.toLocaleString()}</p>
        {
            priceChange < 0 ? (
                <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>)
                :
                (
                    <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
                )
        }
        <p className="coin-marketcap">
            Mkt Cap: ${marketcap.toLocaleString()}
        </p>
    </div>
</div> */}