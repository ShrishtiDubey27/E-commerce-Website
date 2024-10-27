import React, { useState } from 'react'
import axios from 'axios'
import {backendUrl} from '../App'

const Login = () => {
  

  return (
    <div className='flex items-center justify-center h-screen w-full'>
      <div className='bg-white shadow-md rounded-lg px-8 py-6 max-w-md'>
        <h1 className='text-2xl font-bold mb-4'>ADMIN PANEL</h1>
        
        <form onSubmit={onSubmitHandler}>
          <div className='mb-3'>
            <p className='text-sm font-medium text-gray-700 mb-2'>Email Address</p>
          
            <input 
              onChange={(e) => setEmail(e.target.value)} 
              value={email}
              className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none'
              type="email"
              placeholder='your@email.com'
            />
          </div>

          <div className='mb-3'>
            <p className='text-sm font-medium text-gray-700 mb-2'>Password</p>
          
            <input 
              onChange={(e) => setPassword(e.target.value)} 
              value={password}
              className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none'
              type="password"
              placeholder='Enter your password'
            />
          </div>

    
          <button
            className='mt-2 w-full py-2 px-4 rounded-md text-white bg-black'
            type='submit'
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
