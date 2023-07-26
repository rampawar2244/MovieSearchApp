import React, { useEffect, useState } from "react";
import "./assets/CreateUser.scss";
import axios from "axios";
import { useHistory } from "react-router-dom";
function CreateUser() {
  const history = useHistory()
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
  const onSubmit = (e) => {
    e.preventDefault();
    const data = {name, email, age}
    axios.post('http://localhost:8000/api/create/', data)
    .then((response) =>console.log(response))
    .catch(()=>console.error());
    history.push('/')
  }
  return (
    <div>
      <form className="Create_User" onSubmit={onSubmit}>
        <h3>Create User</h3>
        <div className="form-group">
          <label for="">Name</label>
          <input
            type="text"
            className="form-control"
            id="userName"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label for="">Email</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label for="">Age</label>
          <input
            type="number"
            className="form-control"
            id="userAge"
            placeholder="Age"
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
         
      </form>
    </div>
  );
}

export default CreateUser;
