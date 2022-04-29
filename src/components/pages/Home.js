import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = (id) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    deleteUsers();
    loadusers();
  }, []);

  const loadusers = async () => {
    const result = await axios.get("http://localhost:3001/users");
    setUser(result.data);
  };

  const deleteUsers = async (id) => {
    await axios.delete(`http://localhost:3001/users/${id}`);
    loadusers();
  };

  return (
    <>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">UserName</th>
            <th scope="col">Email</th>
            {/* <th scope="col">Address</th> */}
            <th scope="col">Phone</th>

            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {user.map((users) => (
            <tr>
              <td>{users.id}</td>
              <td>{users.name}</td>
              <td>{users.username}</td>
              <td>{users.email}</td>
              {/* <td>{users.address.stree}</td> */}
              <td>{users.phone}</td>

              <td>
                <Link
                  to={`/viewuser/${users.id}`}
                  className="btn btn-primary m-2"
                >
                  View
                </Link>
                <Link
                  to={`/edituser/${users.id}`}
                  className="btn btn-primary m-2"
                >
                  Edit
                </Link>
                <button
                  className="btn btn-danger m-2"
                  onClick={() => deleteUsers(users.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;
