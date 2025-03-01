export const submitHandle = (username,password,setFun)=>{
    setFun(pre=>({
        ...pre,
        userID:username.current.value,
        password:password.current.value,
        name:username.current.value
    }))
}

export const submituserActivity =(image,name,city,position,setFunName,setFunImage,setFunCity,setFunposition)=>{
         setFunImage(image.current.value);
         setFunName(name.current.value);
         setFunCity(city.current.value);
         setFunposition(position.current.value);
}