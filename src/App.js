import React from "react";
import "./App.css";
import Main from "./views/Main";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div id="container">
      <div id="nav-box">
        <NavBar />
      </div>
      <Main />
    </div>
  );
};

export default App;
