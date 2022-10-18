import React, { useState } from "react";
import "./register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const history = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const register = () => {
    const user = {
      name,
      email,
      password,
      cpassword,
    };
    if (
      user.name &&
      user.email &&
      user.password &&
      user.password === user.cpassword
    ) {
      axios.post("http://localhost:9002/register", user).then((res) => {
        if (res.data.message) {
          alert(res.data.message);
        }
        history("/login");
      });
    } else {
      alert("invlid input");
    }
  };

  return (
    <div className="register">
      <h1>Register</h1>
      <input
        type="text"
        name="name"
        value={name}
        placeholder="Your Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      <input
        type="text"
        name="email"
        value={email}
        placeholder="Your Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      ></input>
      <input
        type="password"
        name="password"
        value={password}
        placeholder="Your Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      ></input>
      <input
        type="password"
        name="reEnterPassword"
        value={cpassword}
        placeholder="Re-enter Password"
        onChange={(e) => {
          setCpassword(e.target.value);
        }}
      ></input>
      <div className="button" onClick={register}>
        Register
      </div>
      <div>or</div>
      <div className="button" onClick={() => history("/login")}>
        Login
      </div>
    </div>
  );
};

export default Register;
