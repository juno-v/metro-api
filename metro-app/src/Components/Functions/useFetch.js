import React, { useState, useEffect } from 'react'; 

const useFetch = (url, options) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch(url, options);
          const json = await res.json();
          setResponse(json);
          setResponse((state) => {
            // check if route state was updated with route list 
            // console.log('hi this the data find me find me', state);
            return state; 
          })
        } catch (error) {
          setError(error);
        }
      };
      fetchData();
    }, []);
    return { response, error };
    
  };

export default useFetch; 