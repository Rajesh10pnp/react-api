import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/layout/Navbar";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import AddUser from "./components/pages/user/AddUser";
import Edituser from "./components/pages/user/Edituser";
import ViewUser from "./components/pages/user/ViewUser";
import HideShow from './components/HideShow';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/add/user" element={<AddUser />} />
          <Route path="/edituser/:id" element={<Edituser />} />
          <Route path="/viewuser/:id" element={<ViewUser />} />
          <Route path="/hideshow" element={<HideShow/>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
