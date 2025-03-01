import { useContext, useRef } from "react"
import { userActivity } from "../context/UserActivity";
import { userData } from "../context/UserAuth";
import {submituserActivity} from '../Utils/Uthvalidate'
const UserInput = () => {
const { 
    image,
    setimage,
    name,
    setname, 
    city,
    setcity,
    position,
    setposition} =useContext(userActivity);
    const {userDetail} =useContext(userData)

    const imageref =useRef();
    const nameref =useRef();
    const cityref = useRef();
    const positionref =useRef();

  return (
    <div>
        <br/>
        <br/>
        {userDetail.userID?(<div>
            <span>Image:  </span>
            <input 
               type="text"
               placeholder="image url...."
               ref={imageref}/><br/>
                <span>name:  </span>
            <input 
               type="text"
               placeholder="your name...."
               ref={nameref}/><br/>
                <span>city:  </span>
            <input 
               type="text"
               placeholder="your city...."
               ref={cityref}/><br/>
                <span>position:  </span>
            <input 
               type="text"
               placeholder="your position...."
               ref={positionref}/><br/><br/>

               <p>{image}</p>
               <p>{name}</p>
               <p>{city}</p>
               <p>{position}</p>
            <br/>
            <br/>
            <button onClick={()=>submituserActivity
            (imageref,nameref,cityref,positionref,setimage,setname,setcity,setposition)

            }>Submit</button>

        </div>):""}

    </div>
  )
}

export default UserInput