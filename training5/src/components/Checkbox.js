import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Checkbox = () => {

    const [user,setUser]=useState({
        name:"",
        password:""
    })

    const [error,setError]=useState(null)

    const navigate = useNavigate()

    const handleChange=(e)=>{
        const {name,value} = e.target
        setUser({...user,[name]:value})
    }

    const handleSubmit=()=>{
        if(user.name!=="kapil"){
            setError("User Name is Wrong")
            return
        }
        if(user.password!=="123456"){
            setError("Password is Incorrect")
            return
        }

        localStorage.setItem("user",JSON.stringify(user))
        navigate("/")
    }
    
  return (
    <div>
      <input
        type="text"
        name="name"
        value={user.name}
        placeholder="Enter User Name"
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        value={user.password}
        placeholder="Enter Password"
        onChange={handleChange}
      />
      {error && <p>{error}</p>}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Checkbox