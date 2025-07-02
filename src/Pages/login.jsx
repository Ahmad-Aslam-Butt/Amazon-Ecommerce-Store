import React from 'react'

const Login = () => {
    return (
        <div>
            <div className=' flex justify-center align-middle'>
                <img className='w-[103px]' src="src/image/logo.png" alt="logo.png" />
            </div>
            <div className='flex justify-center align-middle'>
            <div className='border-2 px-7 py-5 rounded-lg w-[28vw]  justify-center align-middle  '>
                <h3  className='text-xl font-medium pb-3'>Sign in or create account</h3>
                <p className='text-sm font-semibold pb-3'>Enter mobile number or email</p>
                <input className='border-2 w-[23vw]' type="email" name="" id="" />
                <div className='flex justify-center align-middle'>
                <button className='bg-[#ffce12] px-[9vw] rounded-2xl py-1 mt-2 align-middle justify-center'>Continue</button>
                </div>
                <p className='text-[13px]  mt-4 mb-3 '>By continuing, you agree to Amazon's <a className='text-[#0c3390]  ' href="#"> Conditions of Use</a> and <a className='text-[#0c3390]  ' href="#">Privacy Notice.</a></p>
                <a className='text-[#0c3390] text-[14px] ' href="#">Need help?</a>
                <div className='h-[1px] bg-[#d5d9d9] my-3'></div>
                <p className='text-sm font-semibold pb-3'>Buying for work?</p>
                <a className='text-[#0c3390] text-[14px] ' href="#">Create a free business account</a>
            </div>
            </div>
        </div>
    )
}

export default Login