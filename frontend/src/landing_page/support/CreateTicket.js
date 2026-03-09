import React from 'react';

function CreateTicket() {
    return (
        <div className='container'>
            <div className='row p-5 mt-5 mb-5'>
                <h1 className='fs-2 ps-5'>To create a ticket, select a relevant topic</h1>
                <div className='col-4 p-5'>
                    <p className='fs-5 mb-2'><i class="fa fa-plus-circle" aria-hidden="true"></i> Account Opening</p>
                    <a href='' style={{ lineHeight: "2.4" }}>Online Account Opening</a> <br />
                    <a href='' style={{ lineHeight: "2.4" }}>Offline Account Opening</a> <br />
                    <a href='' style={{ lineHeight: "2.4" }}>Company, Patnership and HUF Account</a> <br />
                    <a href='' style={{ lineHeight: "2.4" }}>Opening</a> <br />
                    <a href='' style={{ lineHeight: "2.4" }}>NRI Account Opening</a> <br />
                    <a href='' style={{ lineHeight: "2.4" }}>Charges at Zerodha</a> <br />
                    <a href='' style={{ lineHeight: "2.4" }}>Zerodha IDFC First Bank 3-in-1 Account</a> <br />
                    <a href='' style={{ lineHeight: "2.4" }}>Getting Started</a> <br />
                </div>
                <div className='col-4 p-5'>
                    <p className='fs-5 mb-2'><i class="fa fa-user" aria-hidden="true"></i>Your Zerodha Account</p>
                    <a href='' style={{ lineHeight: "2.4" }}>Login Credentials</a> <br />
                    <a href='' style={{ lineHeight: "2.4" }}>Account Modification and Segment Addition</a> <br />
                    <a href='' style={{ lineHeight: "2.4" }}>DP ID and bank details</a> <br />
                    <a href='' style={{ lineHeight: "2.4" }}>Your Profile</a> <br />
                    <a href='' style={{ lineHeight: "2.4" }}>Transfer and conversion of shares</a> <br />
                </div>

                <div className='col-4 p-5'>
                    <p className='fs-5 mb-2'><i class="fa fa-bar-chart" aria-hidden="true"></i>Your Zerodha Account</p>
                    <a href='' style={{ lineHeight: "2.4" }}>Margin/leverage, Product and Order types</a> <br />
                    <a href='' style={{ lineHeight: "2.4" }}>Kite Web and Mobile</a> <br />
                    <a href='' style={{ lineHeight: "2.4" }}>Trading FAQs</a> <br />
                    <a href='' style={{ lineHeight: "2.4" }}>Corporate Actions</a> <br />
                    <a href='' style={{ lineHeight: "2.4" }}>Sentinel</a> <br />
                    <a href='' style={{ lineHeight: "2.4" }}>Kite API</a> <br />
                    <a href='' style={{ lineHeight: "2.4" }}>PI and other Platforms</a> <br />
                    <a href='' style={{ lineHeight: "2.4" }}>Stockreports+</a> <br />
                    <a href='' style={{ lineHeight: "2.4" }}>GTT</a> <br />
                </div>


                <div className='col-4 p-5 mb-5'>
                    <p className='fs-5 mb-2'><i class="fa-regular fa-credit-card"></i>Funds</p>
                    <a href='' style={{ lineHeight: "2.4" }}>Adding Funds</a> <br />
                    <a href='' style={{ lineHeight: "2.4" }}>Fund Withdrawal</a> <br />
                    <a href='' style={{ lineHeight: "2.4" }}>eMandates</a> <br />
                    <a href='' style={{ lineHeight: "2.4" }}>Adding Bank Accounts</a> <br />

                </div>
                <div className='col-4 p-5 mb-5'>
                    <p className='fs-5 mb-2'><i class="fa-solid fa-circle-notch"></i>Console</p>
                    <a href='' style={{ lineHeight: "2.4" }}>Report</a> <br />
                    <a href='' style={{ lineHeight: "2.4" }}>Ledger</a> <br />
                    <a href='' style={{ lineHeight: "2.4" }}>Portfolio</a> <br />
                    <a href='' style={{ lineHeight: "2.4" }}>60 Day Challenge</a> <br />
                    <a href='' style={{ lineHeight: "2.4" }}>IPO</a> <br />
                    <a href='' style={{ lineHeight: "2.4" }}>Referral Program</a> <br />
                </div>

                <div className='col-4 p-5 mb-5'>
                    <p className='fs-5 mb-2'> <i class="fa-regular fa-circle"></i>Coin</p>
                    <a href='' style={{ lineHeight: "2.4" }}>Understanding Mutual Funds</a> <br />
                    <a href='' style={{ lineHeight: "2.4" }}>About Coin</a> <br />
                    <a href='' style={{ lineHeight: "2.4" }}>Buying and Selling through Coin</a> <br />
                    <a href='' style={{ lineHeight: "2.4" }}>Starting an SIP</a> <br />
                    <a href='' style={{ lineHeight: "2.4" }}>Managing your Portfolio</a> <br />
                    <a href='' style={{ lineHeight: "2.4" }}>Coin App</a> <br />
                    <a href='' style={{ lineHeight: "2.4" }}>Moving to Coin</a> <br />
                    <a href='' style={{ lineHeight: "2.4" }}>Government Securities</a> <br />
                </div>

            </div>
        </div>
    );
}

export default CreateTicket;