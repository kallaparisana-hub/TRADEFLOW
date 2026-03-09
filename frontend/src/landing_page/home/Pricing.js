import React from 'react';

function Pricing() {
    return ( 
        <div className='container mt-5 mb-5'>
            <div className='row'>
                <div className='col-5'>
                    <h2 className='mb-4'>Unbeatable pricing</h2>
                    <p className='text-muted'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href=''style={{textDecoration:"none"}}>See pricing <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className='col-7'>
                    <div className='row text-center'>

                        <div className='col d-flex align-items-center justify-content-center gap-3'>
                            <img src='media/images/pricing(₹0).svg' alt='pricing' style={{height:"100px", width:"100px"}}/>
                            <p className='mb-0 text-start' style={{fontSize:"14px", lineHeight:"1.4", maxWidth:"160px"}}>Free account <br/>opening</p>
                        </div>

                        <div className='col d-flex align-items-center justify-content-center gap-3'>
                            <img src='media/images/pricing(₹0).svg' alt='pricing' style={{height:"100px", width:"100px"}}/>
                            <p className='mb-0 text-start' style={{fontSize:"14px", lineHeight:"1.4", maxWidth:"160px"}}>Free equity delivery <br/>and direct mutual funds</p>
                        </div>

                        <div className='col d-flex align-items-center justify-content-center gap-3'>
                            <img src='media/images/pricing(₹20).svg' alt='pricing' style={{height:"100px", width:"100px"}}/>
                            <p className='mb-0 text-start' style={{fontSize:"14px", lineHeight:"1.4", maxWidth:"160px"}}>Intraday and <br/>F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;