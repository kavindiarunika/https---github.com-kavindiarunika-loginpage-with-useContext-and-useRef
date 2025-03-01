import { createContext, useState } from "react"

export const userData =createContext({});

const UserAuth = ({children}) => {
    const [userDetail,setuserdetail] =useState({
        name:'',
        password:'',
        userID:''
    })
  return (
    <userData.Provider value={{userDetail,setuserdetail}}>
          {children}
    </userData.Provider>
  )
}

export default UserAuth