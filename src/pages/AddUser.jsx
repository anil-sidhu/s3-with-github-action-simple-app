import { useDispatch } from "react-redux"
import { useState } from "react"
import { addUserData } from "../redux/slice"

function AddUser() {

    const [name,setName]=useState('')
    const [email,setEmail]=useState('')

  const dispatch= useDispatch()
  return (
    <div>
        <h1>Add New User Page</h1>
        <input type="text" value={name} 
        onChange={(e)=>setName(e.target.value)} placeholder="enter name" />
        <br />
        <br />
        <input type="text" 
         onChange={(e)=>setEmail(e.target.value)}
        placeholder="enter email" />
        <br />
        <br />
        <button onClick={()=>dispatch(addUserData({name,email}))} >Add User</button>
     
    </div>
  )
}

export default AddUser
