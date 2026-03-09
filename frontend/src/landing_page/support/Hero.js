import React from 'react';

function Hero() {
    return (
        <section className='container-fluid' id='supportHero'>
            <div className='p-5' id='supportWrapper'>
                <h4>Support Portal</h4>
                <a href=''>Track Tickets</a>
            </div>

            <div className='row p-4 mb-5'>
                <div className='col-7 p-5'>
                    <h1 className='fs-3'>Search for an answer or browse help topics to create a ticket</h1>
                    <input name='inp' className='mb-3' placeholder='Eg. How do I activate an F&O' /> <br />
                    <a href='' className='me-3'>Track account opening</a>
                    <a href='' className='me-3'>Track segment activation</a>
                    <a href='' className='me-3'>Intraday Margins</a>
                    <a href='' className='me-3'>Kite user manual</a>
                </div>

                <div className='col-5 p-5 '>
                    <h1 className='fs-3'>Featured</h1>
                    <ol>
                        <li className='pb-2' ><a href=''>Current Takeovers and Delisting - January 2024</a></li>
                        <li><a href=''>Latest Intraday Leverages - MIS & CO</a></li>
                    </ol>

                </div>
            </div>
        </section>
    );
}

export default Hero;