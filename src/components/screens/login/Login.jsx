import React, { useState } from "react";
import SignUp from "./signUp/SignUp";
import SignIn from "./signIn/SignIn";
import Styles from "./Login.module.css";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const URL = useSelector(state => state.URL);
  const isLogined = useSelector(state => state.isLogined);
  console.log("Залогинен: ", isLogined);

  const setIsLogined = status => {
    dispatch({ type: "SET_LOGINED", payload: status });
  };

  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const [isRegistred, setIsRegistred] = useState(false);

  const setAccessToken = (token) => {
    localStorage.setItem("accessToken", token);
  }

  const handleInputChange = e => {
    const target = e.target;
    setFormData({ ...formData, [target.name]: target.value });
  };

  const handleSetRegister = () => {
    setIsRegistred(!isRegistred);
  };

  const handleSubmit = endpoint => {
    sendLoginData(formData, endpoint);
  };

  const sendLoginData = async (data, endpoint) => {
    const headers = new Headers();
    headers.append("accept", "application/json");

    let sendData = "";
    let isRegistration = true;

    if (endpoint === "auth/register") {
      headers.append("Content-Type", "application/json");
      sendData = JSON.stringify(data);
    } else {
      headers.append("Content-Type", "application/x-www-form-urlencoded");
      sendData = `grant_type=&username=${data.email}&password=${data.password}&scope=&client_id=&client_secret=`;
      isRegistration = false;
    }

    try {
      const res = await fetch(URL + endpoint, {
        method: "POST",
        headers: headers,
        body: sendData,
      });
      const responseJson = await res.json();

      if (res.ok) setIsRegistred(true);
      if (!isRegistration) setIsLogined(res.ok);
      if(isLogined) {
        setAccessToken(responseJson.access_token);
      }

      return responseJson;
    } catch (e) {
      console.log("Error", e);
    }
  };

  return (
    <div className={Styles.login}>
      {isRegistred ? (
        <SignIn
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
          handleSetRegister={handleSetRegister}
        />
      ) : (
        <SignUp
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
          handleSetRegister={handleSetRegister}
        />
      )}
    </div>
  );
};

export default Login;
