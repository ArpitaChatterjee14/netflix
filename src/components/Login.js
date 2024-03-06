import React from 'react'
import Header from './Header'
import { useState } from 'react'

const Login = () => {
  const [signUp, setSignUp] =  useState(false);
  function handleClick() {
    setSignUp(!signUp);
  }
  return (
    <div>
        <Header />
        <div className='absolute bg-blend-darken'>
            <div className='z-20 bg-black'></div>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            />
        </div>
        <form className="w-1/5 p-12 bg-black bg-opacity-80 absolute my-36 mx-auto right-0 left-0 text-white">
            <h1 className='text-3xl py-4'>{signUp ? 'Sign Up' : 'Sign In'}</h1>
            {signUp && <input type="text" placeholder="Full Name" className="p-4 my-2 w-full bg-zinc-800 rounded" />}
            <input type="text" placeholder="Email or phone number" className="p-4 my-2 w-full bg-zinc-800 rounded" />
            <input type="password" placeholder="Password" className="p-4 my-2 w-full bg-zinc-800 rounded" />
            <button className="p-4 my-6 bg-red-600 w-full rounded">{signUp ? 'Sign Up' : 'Sign In'}</button>
            <p onClick={handleClick} className='cursor-pointer'>{signUp ? 'Already Registered? Sign In' : 'New to Netflix? Sign Up Now'}</p>
        </form>
    </div>
  )
}

export default Login