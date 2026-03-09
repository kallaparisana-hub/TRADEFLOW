import React from 'react';

function LeftSection({ imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
    return (
        <div className='container mb-5'>
            <div className='row'>

                <div className='col-6 p-5'>
                    <img src={imageURL} alt='pk' />
                </div>

                <div className='col-6 ps-5 mt-5 p-5'>
                    <h2>{productName}</h2>
                    <p>{productDescription}</p>
                    <div>
                        <a href={tryDemo}>Try demo <i className="fa-solid fa-arrow-right"></i></a>
                        <a href={learnMore} style={{ marginLeft: "50px" }}>Learn more <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div className='mt-4'>
                        <a href={googlePlay}><img src='media/images/google-play-badge.svg' /></a>
                        <a href={appStore} style={{ marginLeft: "50px" }}><img src='media/images/appstore-badge.svg' /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;