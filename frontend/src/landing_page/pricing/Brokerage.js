import React from 'react';

function Brokerage() {
    return (
        <>
            <div className='container mb-5'>
                <h2 className='fs-4 text-muted mb-4 ms-5'>Charges for account opening</h2>
                <div className='row border ms-5 mb-5' style={{ width: "80%", lineHeight: "1.7" }}>
                    <table>
                        <thead>
                            <tr className='border-bottom'>
                                <th className='ps-3 p-2 '>Type of account</th>
                                <th className='text-end pe-5'>Charges</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td className='ps-3 p-2'>Online account</td>
                                <td className='text-end pe-5'><span className='free-tag'>Free</span></td>
                            </tr>

                            <tr>
                                <td className='ps-3 p-2'>Offline account</td>
                                <td className='text-end pe-5'><span className='free-tag'>Free</span></td>
                            </tr>

                            <tr>
                                <td className='ps-3 p-2'>NRI account (offline only)</td>
                                <td className='text-end pe-5'>₹ 500</td>
                            </tr>

                            <tr>
                                <td className='ps-3 p-2'>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
                                <td className='text-end pe-5'>₹ 500</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className='container mb-5'>
                <h2 className='fs-4 text-muted mb-4 ms-5'>Demat AMC (Annual Maintenance Charge)</h2>
                <div className='row border ms-5' style={{ width: "80%", lineHeight: "1.7" }}>
                    <table>
                        <thead>
                            <tr className='border-bottom'>
                                <th className='ps-3 p-2 '>Value of holdings</th>
                                <th className='ps-5'>AMC</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td className='ps-3 p-2'>Up to ₹4 lakh</td>
                                <td className='ps-5'><span className='free-tag'>Free</span></td>
                            </tr>

                            <tr>
                                <td className='ps-3 p-2'>₹4 lakh - ₹10 lakh</td>
                                <td className='ps-5'><span className='free-tag'>₹ 100 per year, charged quarterly*</span></td>
                            </tr>

                            <tr>
                                <td className='ps-3 p-2'>Above ₹10 lakh</td>
                                <td className='ps-5'>₹ 300 per year, charged quarterly</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>

            <div className='container mb-5'>
                <h2 className='fs-4 text-muted mb-4 ms-5'>Charges for optional value added services</h2>
                <div className='row border ms-5 mb-5' style={{ width: "80%", lineHeight: "1.7" }}>
                    <table>
                        <thead>
                            <tr className='border-bottom'>
                                <th className='ps-3 p-2 col-4'>Service</th>
                                <th className='text-start pe-5 col-4'>Billing Frequency</th>
                                <th className='ms-5 col-4'>Charges</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td className='ps-3 p-2 col-4'>Tickertape</td>
                                <td className='text-start pe-5 col-4'><span className='free-tag'>Monthly / Annual</span></td>
                                <td className='ms-5 col-4'><span className='free-tag'>Free: 0 | Pro: 249/2399</span></td>
                            </tr>

                            <tr>
                                <td className='ps-3 p-2 col-4'>Smallcase</td>
                                <td className='text-start pe-5 col-4'><span className='free-tag'>Per transaction</span></td>
                                <td className='ms-5 col-4'><span className='free-tag'>Buy & Invest More: 100 | SIP: 10</span></td>
                            </tr>

                            <tr>
                                <td className='ps-3 p-2 col-4'>Kite Connect</td>
                                <td className='text-start pe-5 col-4'>Monthly</td>
                                <td className='ms-5 col-4'>Connect: 500 | Personal: Free</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>


            <div className='container'>
                <h2 className='fs-4'>Charges explained</h2>
                <div className='row'>
                    <div className='col-6 p-5'>
                        <p className='mt-4 fs-6'>Securities/Commodities transaction tax</p>

                        <p style={{ fontSize: "13px" }}>Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.</p>

                        <p style={{ fontSize: "13px" }}>When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.</p>

                        <p className='fs-6'>Transaction/Turnover Charges</p>

                        <p style={{ fontSize: "13px" }}>Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</p>

                        <p style={{ fontSize: "13px" }}>BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)</p>

                        <p style={{ fontSize: "13px" }}>BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.</p>

                        <p style={{ fontSize: "13px" }}>BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.</p>

                        <p style={{ fontSize: "13px" }}>BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.</p>

                        <p className='fs-6'>Call & trade</p>

                        <p style={{ fontSize: "13px" }}>Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.</p>

                        <p className='fs-6'>Stamp charges</p>

                        <p style={{ fontSize: "13px" }}>Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.</p>

                        <p className='fs-6'>NRI brokerage charges</p>

                        <ul style={{ fontSize: "13px" }}>
                            <li>Equity and Futures - ₹0.01 per crore + GST of the traded value.</li>
                            <li>Options - ₹0.01 per crore + GST traded value (premium value).</li>
                            <li>Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.</li>
                        </ul>

                        <p className='fs-6'>Account with debit balance</p>

                        <p style={{ fontSize: "13px" }}>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</p>

                        <p className='fs-6'>Charges for Investor's Protection Fund Trust (IPFT) by NSE</p>

                        <ul style={{ fontSize: "13px" }}>
                            <li>Equity and Futures - ₹0.01 per crore + GST of the traded value.</li>
                            <li>Options - ₹0.01 per crore + GST traded value (premium value).</li>
                            <li>Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.</li>
                        </ul>

                        <p className='fs-6'>Margin Trading Facility (MTF)</p>

                        <ul style={{ fontSize: "13px" }}>
                            <li>MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount. The interest is applied from T+1 day until the day MTF stocks are sold.</li>
                            <li>MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.</li>
                            <li>MTF pledge charge: ₹15 + GST per pledge and unpledge request per ISIN.</li>
                        </ul>

                    </div>
                    <div className='col-6 p-5'>
                        <p className='mt-4 fs-6'>GST</p>

                        <p style={{ fontSize: "13px" }}>Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)</p>

                        <p className='fs-6'>SEBI Charges</p>

                        <p className='fs-6'>DP (Depository participant) charges</p>

                        <p style={{ fontSize: "13px" }}>₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.</p>

                        <p style={{ fontSize: "13px" }}>Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.</p>

                        <p style={{ fontSize: "13px" }}>Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.</p>

                        <p className='fs-6'>Pledging charges</p>

                        <p style={{ fontSize: "13px" }}>₹30 + GST per pledge request per ISIN.</p>

                        <p className='fs-6'>AMC (Account maintenance charges)</p>

                        <p style={{ fontSize: "13px" }}>For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000. To learn more about BSDA, <a href=''>Click here</a></p>

                        <p style={{ fontSize: "13px" }}>For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days). To learn more about AMC, <a href=''>Click here</a></p>

                        <p className='fs-6'>Corporate action order charges</p>

                        <p style={{ fontSize: "13px" }}>₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through Console.</p>

                        <p className='fs-6'>Off-market transfer charges</p>

                        <p style={{ fontSize: "13px" }}>₹25 per transaction.</p>

                        <p className='fs-6'>Physical CMR request</p>

                        <p style={{ fontSize: "13px" }}>First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for subsequent requests.</p>

                        <p className='fs-6'>Payment gateway charges</p>

                        <p style={{ fontSize: "13px" }}>₹9 + GST (Not levied on transfers done via UPI)</p>

                        <p className='fs-6'>Delayed Payment Charges</p>

                        <p style={{ fontSize: "13px" }}>Interest is levied at 18% a year or 0.05% per day on the debit balance in your trading account. <a href=''>Learn more</a>.</p>

                        <p className='fs-6'>Trading using 3-in-1 account with block functionality</p>

                        <ul style={{ fontSize: "13px" }}>
                            <li>Delivery & MTF Brokerage: 0.5% per executed order.</li>
                            <li>Intraday Brokerage: 0.05% per executed order.</li>
                        </ul>

                    </div>
                </div>
            </div>

            <div className='container ps-5'>
                <p style={{fontSize: "18px"}}>Disclaimer</p>

                <p style={{ fontSize: "13px" }}>For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.</p>
            </div>
        </>

    );
}

export default Brokerage;