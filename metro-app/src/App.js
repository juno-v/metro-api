import './App.css';
import React, { useState, useEffect } from 'react'; 

function App() {

  const [routes, setRoutes] = useState([])

  useEffect( () => {
    fetchRoutes(); 
  }, []); 

  let noRoutesAlertMessage = 'There was an issue fetching the routes list. Please try again later.';

  const fetchRoutes = async () => {
    const response = await fetch("/routes")
    const data = await response.json();

    if (response.status !== 200 ) {
      alert(<h1> { noRoutesAlertMessage } </h1>); 
      return; 
    }

    else {
      setRoutes(data);
      setRoutes((state) => {
        // check if route state was updated with route list 
        //console.log('hi this the data find me find me', state);
        return state; 
      })
  }
}

if (routes.length === 0) return <div> <h1> Fetching routes... </h1> </div>

  return (

    <div className="App">
      { routes.map((route, index) => (
        <li key={index}>
          {route["Description"]}
        </li>
      ))}
    </div>
  );
}

export default App;