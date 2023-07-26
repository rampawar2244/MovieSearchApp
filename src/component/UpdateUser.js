import axios from 'axios';
import React, {useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'

function UpdateUser() {
  const history = useHistory()
  const { id } = useParams()
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();

   console.log(id ,"Id Find");
  useEffect(()=>{
    axios.get(`http://localhost:8000/api/getuser/${id}`)
    .then((res)=>{
      setName(res.data.name)
      setEmail(res.data.email)
      setAge(res.data.age)
      console.log(res, "update show");
     
    })
    .catch(err=>console.log(err, "err"))
  },[])

  const handleUpdate = (e) =>{
    e.preventDefault(); 
    const data = {name, email, age}
    axios.put(`http://localhost:8000/api/update/${id}`, data)
    .then((response) =>{console.log(response,"up sucess")
  window.location.reload()
  })
    .catch((err)=>console.log(err, "err update "));
    history.push('/')
  
  }
  return (
    <div>
    <form className="Create_User" onSubmit={handleUpdate}>
      <h3>Update User</h3>
      <div className="form-group">
        <label for="">Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Name"
          value={name}
          onChange={(e)=> setName(e.target.value)}
        />
        
      </div>
      <div className="form-group">
        <label for="">Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label for="">Age</label>
        <input
          type="number"
          className="form-control"
          placeholder="Age"
          value={age}
          onChange={(e)=> setAge(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Update
      </button>
    </form>
  </div>
  )
}

export default UpdateUser