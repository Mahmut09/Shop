import React, { useState } from "react";
import SignUp from "./signUp/SignUp";
import SignIn from "./signIn/SignIn";
import Styles from "./Login.module.css";

const Login = () => {
  const URL = "http://127.0.0.1:5000/";

  // const endPoints = {
  //     register: "auth/register",
  // }

  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const [isRegistred, setIsRegistred] = useState(false);

  const handleInputChange = e => {
    const target = e.target;
    setFormData({ ...formData, [target.name]: target.value });
  };

  const handleSubmit = endpoint => {
    sendLoginData(formData, endpoint);
  };

  const sendLoginData = async (data, endpoint) => {
    // if(!data.username) {
    //     delete(data.username)
    // }
    // console.log(data);
    const headers = new Headers();
    headers.append("accept", "application/json");

    endpoint === "auth/register"
      ? headers.append("Content-Type", "application/json")
      : headers.append("Content-Type", "application/x-www-form-urlencoded");

    let sendData = "";

    endpoint === "auth/register"
      ? (sendData = JSON.stringify(data))
      : (sendData = `grant_type=&username=${data.email}&password=${data.password}&scope=&client_id=&client_secret=`);

    const res = await fetch(URL + endpoint, {
      method: "POST",
      headers: headers,
      body: sendData,
    });
    const responseJson = await res.json();
    if (res.ok) {
      setIsRegistred(true);
    }
    return responseJson;
  };

  return (
    <div className={Styles.login}>
      {isRegistred ? (
        <SignIn
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
        />
      ) : (
        <SignUp
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
        />
      )}
    </div>
  );
};

export default Login;
