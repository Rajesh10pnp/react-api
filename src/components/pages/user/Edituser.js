import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Edituser = () => {
  let navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });
  const onChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3001/users/${id}`, user);
    navigate("/");
  };
  const { name, username, email } = user;

  useEffect(() => {
    loaduser();
  }, []);

  const loaduser = async () => {
    const result = await axios.get(`http://localhost:3001/users/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <Link to="/" className="btn btn-danger m-5">
        Cancel
      </Link>
      <form onSubmit={(e) => onSubmit(e)}>
        <h3 className="d-flex justify-content-center">Edit User</h3>
        <div className="d-flex justify-content-center input-group mb-3">
          <input
            type="text"
            className="form-control"
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
            className="form-control"
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
            className="form-control"
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
            className="form-control"
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
            className="form-control"
            placeholder="city"
            aria-label="city"
            aria-describedby="basic-addon1"
            name="city"
            onChange={onChangeHandler}
            value={city}
          />
        </div> */}
        <div className="d-grid gap-2">
          <button className="btn btn-warning" type="submit">
            Edit User
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edituser;
