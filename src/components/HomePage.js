import React from "react";
import SearchBar from "./SearchBar";
import logo from '../assets/png/logo.png';

const HomePage = () => {
  return(
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <SearchBar/>
    </header>
  </div>
  )
};

export default HomePage;
