import React from 'react';

function Hero() {
    return (
        <div className='container'>
            <div className='row text-center'>
                <img src='media/images/homeHero.svg' alt='Hero' className='img-fluid mt-5 mx-auto d-block' style={{ maxWidth: "900px" }}/>
                <h1 className='mt-5'>Invest in everything</h1>
                <p className='fs-5 mt-2 mb-5 text-muted'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className='p-2 btn btn-primary fs-5 mb-5' style={{ width: "17%", margin: "0 auto" }}>Sign up for free</button>
            </div>
        </div>
    );
}

export default Hero;