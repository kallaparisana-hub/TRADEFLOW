import React from 'react';

function Team() {
    return (
        <div className='container'>
            <div className='row p-3 mt-5 border-top'>
                <h2 className='text-center mt-5'>People</h2>
            </div>

            <div className='row text-muted' style={{ lineHeight: "1.7", fontSize: "1.1em" }}>
                <div className='col-6 p-5 text-center'>
                    <img src='media/images/nithin-kamath.jpg' alt='team' style={{ borderRadius: "100%", width: "50%" }} />
                    <h4 className='mt-5'>Nithin Kamath</h4>
                    <h6>Founder, CEO</h6>
                </div>

                <div className='col-6 p-5'>
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

                    <p>Playing basketball is his zen.</p>

                    <p>Connect on <a href=''>Homepage</a> / <a href=''>TradingQnA</a> / <a href=''>Twitter</a></p>
                </div>
            </div>

            <div className='row p-5 text-center'>
                <div className='col text-muted'>
                    <img className='mb-3' src='media/images/Nikhil.jpg' alt='team' style={{ borderRadius: "100%", width: "60%" }} />
                    <h4 mt-5>Nikhil Kamath</h4>
                    <h6>Co-founder & CFO</h6>
                </div>
                <div className='col text-muted'>
                    <img className='mb-3' src='media/images/Kailash.jpg' alt='team' style={{ borderRadius: "100%", width: "60%" }} />
                    <h4 mt-5>Dr. Kailash Nadh</h4>
                    <h6>CTO</h6>
                </div>
                <div className='col text-muted'>
                    <img className='mb-3' src='media/images/Venu.jpg' alt='team' style={{ borderRadius: "100%", width: "60%" }} />
                    <h4 mt-5>Venu Madhav</h4>
                    <h6>COO</h6>
                </div>
            </div>

            <div className='row p-5 text-center'>
                <div className='col text-muted'>
                    <img className='mb-3' src='media/images/Seema.jpg' alt='team' style={{ borderRadius: "100%", width: "60%" }} />
                    <h4 mt-5>Seema Patil</h4>
                    <h6>Director</h6>
                </div>
                <div className='col text-muted'>
                    <img className='mb-3' src='media/images/karthik.jpg' alt='team' style={{ borderRadius: "100%", width: "60%" }} />
                    <h4 mt-5>Karthik Rangappa</h4>
                    <h6>Chief of Education</h6>
                </div>
                <div className='col text-muted'>
                    <img className='mb-3' src='media/images/Austin.jpg' alt='team' style={{ borderRadius: "100%", width: "60%" }} />
                    <h4 mt-5>Austin Prakesh</h4>
                    <h6>Director Strategy</h6>
                </div>
            </div>
        </div>
    );
}

export default Team;