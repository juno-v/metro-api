import './App.css';
import React, { useState, useEffect } from 'react'; 
import Header from "./Components/Header/Header"; 
import Routes from "./Components/Routes/Routes"; 
import LightRail from "./Components/LightRail/LightRail";

function App() {

 
  return (

    <div className="App">
      hello world
      <Header /> 
      <LightRail />
      {/* <Routes />  */}
    </div>
  );
}

export default App;