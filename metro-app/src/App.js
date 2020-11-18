import './App.css';
import React, { useState, useEffect } from 'react'; 
import Header from "./Components/Header/Header"; 
import Routes from "./Components/Pages/Routes";
import Direction from "./Components/Pages/Direction"
import Landing from "./Components/Pages/Landing";
import Stop from "./Components/Pages/Stop";
import NotFound from "./Components/Pages/NotFound";
import { useRoutes } from 'hookrouter'; 

const routes = {
  '/': () => <Landing />, 
  '/routes': () => <Routes />,
  '/direction': () => <Direction />,
  '/stop': () => <Stop />,
}

function App() {
  const match = useRoutes(routes)
 
  return (

    <div className="App">
        <Header /> 
       {match || <NotFound /> }
    </div>
  );
}

export default App;