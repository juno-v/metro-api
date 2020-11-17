import './App.css';
import React, { useState, useEffect } from 'react'; 
//import {Routes} from "./Components/Routes"; 

function App() {

  const [routes, setRoutes] = useState([]); 

  useEffect( () => {
    fetchRoutes(); 
  }, []); 

  const fetchRoutes = async () => {
    const response = await fetch("/routes")
    const data = await response.json();
    setRoutes(data.length); 
    console.log("DATA ARRAY: ", data)
  }

  return (

    <div className="App">
      hello world
      
     <br/>
     {/* {routes.map((route, index) => {
       return (
         <li key={index}>
           {route}
         </li>
       )
     })} */}
     {routes}

    </div>
  );
}

export default App;
