import React from 'react';

function Signup() {
    return (
        <div className='container'>
            <div className='row p-5 m-5 text-center'>
                <h3 className='fs-2 mb-3'>Open a free demat and trading account online</h3>
                <p className='text-muted fs-5 mt-2'>Start investing brokerage free and join a community of 1.6+ crore investors and traders</p>
            </div>

            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='media/images/account_open.svg' alt='openAccount' />
                </div>

                <div className='col-6 p-5 ps-5' id='signupDiv'>
                    <h5 className='fs-2 mb-3'>Signup now</h5>
                    <p className='text-muted fs-5 mt-2'>Or track your existing application</p>
                    <div className="d-flex align-items-center border rounded p-2" style={{ width: "70%" }}>

                        <span className="me-2">
                            <img
                                src="https://flagcdn.com/w20/in.png"
                                alt="India"
                                style={{ width: "20px" }}
                            />
                        </span>

                        <span className="me-2">+91</span>

                        <input
                            type="tel"
                            className="border-0 flex-grow-1"
                            placeholder="Enter your mobile number"
                            style={{ outline: "none", fontSize: "18px" }}
                        />

                    </div>
                    <button
                        className="btn btn-primary mt-4 p-2 fs-5"
                        style={{ width: "70%" }}
                    >
                        Get OTP
                    </button>

                </div>
            </div>
        </div>
    );
}

export default Signup;