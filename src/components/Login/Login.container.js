import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { Login } from "./Login";

export const LoginContainer = () => {
  const history = useHistory();

  const usernameAdmin = useSelector((item) => item.username);
  const passwordAdmin = useSelector((item) => item.password);

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onClick = () => {
    if (usernameAdmin === username && passwordAdmin === password) {
      window.localStorage.setItem("isAuth", true);
      history.push("/");
    } else {
      alert("Имя пользователя или пароль введены не верно");
    }
  };

  return <Login {...{ onClick, setPassword, setUsername }} />;
};
