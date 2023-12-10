import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export const Loginpg = () => {
  const [LoginData,setLoginData] = useState({
    username:'',
    password:''
  })


  //submit function
  const handleLoginSubmit = async(e) => {
    e.preventDefault();

    try{
      const response = await axios.post('http://localhost:8000/login',LoginData)
      const {success,message} = response.data;

      if(success){
        console.log('Login Successfully');
      }else{
        console.log(message );
      }
    }catch(error){
      console.error('Login error', error)
    }
    setLoginData({
      username:'',
      password:''
    })
  }

  const handleLoginChange = (e) =>{
    const {name,value} = e.target; 
    setLoginData((prevData) => ({
      ...prevData,
      [name]:value
    })) 
  }

  return (
    <div className='bg-black/40 h-[770px] w-screen flex flex-col items-center '>
        <div className='bg-black/60 h-full w-2/6 '> 

            <h2 className='text-white text-6xl text-center font-bold mt-14 '>LOGIN </h2>
            <form className='flex flex-col 'onSubmit={handleLoginSubmit}>
              <div className='mt-20 ml-9'>
                <label className='text-white/90 text-3xl '>Username:</label>
                <input 
                  type='text'
                  name='username' 
                  placeholder='enter your user name' 
                  className='ml-2 border rounded w-72 h-10'
                  value={LoginData.username}
                  onChange={handleLoginChange}
                />
              </div>
              <br />
              <br />  
              <div className=' ml-9'>
                <label className='text-white/90 text-3xl '>Password:</label>
                <input 
                  type='text' 
                  name='password'
                  placeholder='enter your password' 
                  className='ml-4 border rounded w-72 h-10 '
                  value={LoginData.password}
                  onChange={handleLoginChange}
                />
              </div>
              <br />
              <br />
              <p className='text-white/50 ml-72'>
                Don't have any account ?
                <Link to='/registration' className='text-amber-500'>Register </Link>
              </p>
              
              <br />
              <br />
              <button type='submit' className='round bg-gray-800 h-14 text-white hover:bg-gray-400 hover:text-black/90 font-bold text-2xl'>
                Login
              </button>
            </form>
        </div>
    </div>
  )
}
