import './App.css';
import React, { useState, useEffect } from 'react'; 

function App() {

  const [route, getRoute] = useState(0); 

  useEffect( () => {
    fetch("/routes").then(response =>
      response.json().then(data => {
        //getRoute(data.Description);
        console.log(data)
      })
    );
  }, []); // use empty array for when componet first mounts

  return (
    <div className="App">
      hello world
    </div>
  );
}

export default App;
