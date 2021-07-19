import React from 'react'
import '../App.css'
import capa from '../Assets/capa.svg'
import arrow from '../Assets/Arrow 1.svg'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <>
            <section className='home'>
                <div className="call">
                    <h1>Crypto Daily</h1>
                    <Link to={'/deshboard'}>
                        <button className="callbutton">
                            Get started<span><img src={arrow} alt="" /></span>
                        </button></Link>
                </div>
                <img src={capa} alt="Crypto Daily" />
            </section>
        </>
    )
}

export default Home
