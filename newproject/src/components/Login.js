import React, { useContext, useRef } from 'react'
import { userData } from '../context/UserAuth'
import { submitHandle } from '../Utils/Uthvalidate'

const Login = () => {
    const { userDetail,setuserdetail} =useContext(userData)
 
    const usernameref=useRef();
    const passwordref =useRef();

   
    return (
    <div>
        {userDetail.userID ?
         (<p>you are logged in,your name is: {userDetail.name}</p>)
         :(
            <>
        <span>Username:  </span>
        <input
         type='text'
         placeholder='your username.....'
         ref={usernameref}/><br/>
         <span>Password:</span>
         <input
          type='password'
          placeholder='your password..'
          ref={passwordref}/><br/>
          <button onClick={()=>submitHandle(usernameref,passwordref,setuserdetail)}>Submit</button>
       
        </>
         )}
       
    </div>
  )
}

export default Login