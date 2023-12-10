import React, { useState } from 'react';
import {Link} from 'react-router-dom';

export const Registration = () => {
  const [RegisterData,setRegisterData] = useState({
    firstname:'',
    lastname:'',
    username:'',
    emailaddress:'',
    dob:'',
    phonenumber:'',
    gender:'',
    password:'',
    confirmpassword:''
  })

  const handleRegisterChange = (e) =>{
    const {name,value} = e.target; 
    setRegisterData((prevData) => ({
      ...prevData,
      [name]:value
    })) 
  }

  return (
    <div className='bg-black/40 h-[770px] w-screen flex flex-col items-center '>
      <div className='bg-black/60 h-full w-3/6 '>
        <h2 className='text-white text-6xl text-center font-bold mt-14 '>Register </h2>
        <form className='flex flex-col'> 
          <div className='mt-20 ml-9 flex'>
            <label className='text-white/90 text-2xl '>First Name:</label>
            <input
              type='text'
              name='firstname'
              value={RegisterData.firstname}
              placeholder='Enter your first name' 
              className='ml-8 border rounded w-52 h-8'
              onChange={handleRegisterChange}
            />
            <label className='text-white/90 text-2xl ml-6'>Last Name:</label>
            <input
              type='text'
              name='lastname'
              placeholder='Enter your last name' 
              className='ml-[78px] border rounded w-52 h-8'
              onChange={handleRegisterChange}
            />
          </div>
          <br />
          <br />  
          <div className=' ml-9 flex'>
            <label className='text-white/90 text-2xl '>Username:</label>
            <input
              type='text'
              name='username'
              placeholder='Enter username' 
              className='ml-9 border rounded w-52 h-8'
              onChange={handleRegisterChange}
            />
            <label className='text-white/90 text-2xl ml-6 '>Email address:</label>
            <input
              type='email'
              name='emailaddress'
              placeholder='Enter your email' 
              className='ml-12    border rounded w-52 h-8'
              onChange={handleRegisterChange}
            />
          </div>
          <br />
          <br />
          <div className=' ml-9 flex'>
            <label className='text-white/90 text-2xl '>Date of birth:</label>
            <input
              type='date'
              name='dob'
              placeholder='Enter date of birth' 
              className='ml-2 border rounded w-52 h-8'
              onChange={handleRegisterChange}
            />
            <label className='text-white/90 text-2xl ml-6'>Phone number:</label>
            <input
              type='text'
              name='phonenumber'
              placeholder='Enter your phone number' 
              className='ml-10  border rounded w-52 h-8'
              onChange={handleRegisterChange}
            />
          </div>
          <br />
          <br />
          <div className=' ml-9 flex'> 
            <h3 className='text-white/90 text-2xl '>Gender:</h3>
            <label className='text-white/90 text-2xl ml-16 '>male</label>
            <input
              type='radio' 
              name='gender'
              className='ml-6'
              
            />
            <label className='text-white/90 text-2xl ml-20'>female</label>
            <input
              type='radio' 
              name='gender'
              className='ml-6'
            />
          </div>
          <br />
          <br />
          <div className=' ml-9 flex'>
            <label className='text-white/90 text-2xl '>Password:</label>
            <input
              type='password'
              name='password'
              className='ml-11 border rounded w-52 h-8'
              onChange={handleRegisterChange}
            />
            <label className='text-white/90 text-2xl ml-6 '>Confirm Password:</label>
            <input
              type='password'
              name='confirmpassword'
              className='ml-2 border rounded w-52 h-8'
              onChange={handleRegisterChange}
            />
          </div>
          <br />
          <br />
          <p className='text-white/50 ml-[650px]'>
            Already an user?
            <Link to='/login' className='text-amber-500'>Login </Link>
          </p>
          <br />
          <button type='submit' className='round bg-gray-800 h-14 text-white hover:bg-gray-400 hover:text-black/90 font-bold text-2xl'>
            Register
          </button>
              
          
        </form>
      </div>
    </div>
  )
}
