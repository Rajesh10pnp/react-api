import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  let navigate = useNavigate();

 
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
     
  });
  const onChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  console.log(user);
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3001/users", user);
    navigate("/");
  };
  const { name, username, email  } = user;

  return (
    <div className="container">
      <form onSubmit={(e) => onSubmit(e)}>
        <h3 className="d-flex justify-content-center">Add User</h3>
        <div className="d-flex justify-content-center input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="name"
            aria-label="name"
            aria-describedby="basic-addon1"
            name="name"
            onChange={onChangeHandler}
            value={name}
          />
        </div>
        <div className="d-flex justify-content-center input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="username"
            aria-label="Username"
            aria-describedby="basic-addon1"
            name="username"
            onChange={onChangeHandler}
            value={username}
          />
        </div>
        <div className="d-flex justify-content-center input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Email"
            aria-label="email"
            aria-describedby="basic-addon1"
            name="email"
            onChange={onChangeHandler}
            value={email}
          />
        </div>
        {/* <div className="d-flex justify-content-center input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="address"
            aria-label="address"
            aria-describedby="basic-addon1"
            name="address"
            onChange={onChangeHandler}
            value={address}
          />
        </div> */}
        {/* <div className="d-flex justify-content-center input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="city"
            aria-label="city"
            aria-describedby="basic-addon1"
            name="city"
            onChange={onChangeHandler}
            value={city}
          />
        </div> */}
        <div class="d-grid gap-2">
          <button class="btn btn-primary" type="submit">
            Add User
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
