import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);
  const [userIds, setUserIds] = useState([]); 
  const [triggerFetch, setTriggerFetch] = useState(false);
  useEffect(()=>{
    axios.get('http://localhost:8000/api/users/')
    .then((res)=>{
      const userIds = res.data.map((user)=> user._id) 
      setUserIds(userIds)
      setUsers(res.data)

    })
    .catch(err=>console.log(err, "err"))
  },[triggerFetch])

  const handleDelete = (_id) => {
    axios.delete(`http://localhost:8000/api/delete/${_id}`)
      .then(res => {
        console.log(res.data);
        setTriggerFetch(prev => !prev); // Trigger a fetch after successful deletion
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h1>User Form</h1>
      <Link to="/create" className="btn btn-success">
        Add +
      </Link>
      <br />
      <br />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">User</th>
            <th scope="col">Email</th>
            <th scope="col">Age</th>
            <th scope="col">Edit</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((val, i) => {
            return (
              <>
                <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <td>{val.name}</td>
                  <td>{val.email}</td>
                  <td>{val.age}</td>
                  <td>
                    <Link to={`/update/${userIds[i]}`} className="btn btn-warning">
                      Update
                    </Link>
                  </td>
                  <td>
                    <button  onClick={(e)=>(handleDelete(val._id))} className="btn btn-danger">
                      Delete
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
