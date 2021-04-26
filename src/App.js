import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { AppHeader } from "./components/AppHeader";
import { MainContainer } from "./components/Main/Main.container";
import { LoginContainer } from "./components/Login/Login.container";
import { ProfileContainer } from "./components/Profile/Profile.container";
import { PostsContainer } from "./components/Posts/Posts.container";
import React from "react";

function App() {
  return (
    <>
      <AppHeader />
      <Route path="/" exact component={MainContainer} />
      <Route path="/login" exact component={LoginContainer} />
      <Route path="/profile" exact component={ProfileContainer} />
      <Route path="/posts" exact component={PostsContainer} />
    </>
  );
}

export default App;
