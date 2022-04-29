import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ViewUser = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });
  const { id } = useParams();
  useEffect(() => {
    loaduser();
  }, []);
  const loaduser = async () => {
    const response = await axios.get(`http://localhost:3001/users/${id}`);
    setUser(response.data);
  };
  return (
    <div className="container">
      <Link to="/" className="btn btn-primary m-4 -3">
      <span><i className="bi bi-backspace p-2"></i></span>
        Back to home
      </Link>
      <h3 className="display-4">id:{  user.id}</h3>

      <div className="table">
        <thead>
          <tr className="font-italic"><span  className="h5 text-primary text-uppercase">Name:</span> { user.name}</tr>
          <tr><span  className="h5 text-primary text-uppercase">Username:</span> { user.username}</tr>
          <tr><span  className="h5 text-primary text-uppercase">Email:</span> { user.email}</tr>
        </thead>
      </div>
    </div>
  );
};

export default ViewUser;
