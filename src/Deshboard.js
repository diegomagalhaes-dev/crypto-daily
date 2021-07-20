import './App.css';
import React, { useState, useEffect } from 'react'
import api from './Services/api'
import Coin from './Components/Coin';
import Spinner from "react-spinkit";


function Deshboard() {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        api
            .get('markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
            .then(res => {
                setCoins(res.data)
                setLoading(false)
            })
            .catch(error => console.log(error))
    }, [])

    const handleChange = e => {
        setSearch(e.target.value)
    }

    const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <div className="card-coin">
            {
                loading ? <div className="lodingScrean"> <Spinner name="pacman" fadeIn="none" color="#EF9444" /></div>
                    :
                    <>
                        <div className="coin-search">
                            <h1 className="coin-text">Search a currency</h1>
                            <form>
                                <input type="text" placeholder='Search' className="coin-input" onChange={handleChange} />
                            </form>
                        </div>
                        <div className="inner">
                            <div className="row">
                                {filteredCoins.map(({ id, name, image, symbol, current_price, market_cap, total_volume, price_change_percentage_24h }) => {
                                    return (
                                        <Coin
                                            key={id}
                                            image={image}
                                            name={name}
                                            symbol={symbol}
                                            price={current_price}
                                            marketcap={market_cap}
                                            priceChange={price_change_percentage_24h}
                                            volume={total_volume}
                                            id={id}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                    </>
            }
        </div>
    );
}

export default Deshboard;
