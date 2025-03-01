import { createContext, useContext, useState } from "react"

export const  userActivity =createContext({})

const UserActivity = ({children}) => {
    const [image, setimage]=useState('');
    const [name, setname] =useState('');
    const [city ,setcity] =useState('');
    const [position,setposition] =useState('');

  return (
    <userActivity.Provider value={ {
            image,setimage,name,setname, city,setcity,position,setposition
        } }>
            {children}
    </userActivity.Provider>
  )
}

export default UserActivity