import React, { useState, useEffect } from 'react'; 
import "./LightRail.css"
import useFetch from "../Functions/useFetch"; 
import Routes from "../Pages/Routes"; 
import { useRoutes, A } from 'hookrouter';


const routes = {
    '/routes': () => <Routes />, 
}



function LightRail () {

    const [busLine, setSelectedBusLine] = useState(null);

    
    const match = useRoutes(routes); 


    const res = useFetch("/routes", {});
    if (!res.response) {
        return <div>Loading...</div>
      }
    const blueLine = res.response[0];
    const greenLine = res.response[1];      

    const test = (event) => {
        console.log('hello world!!! ')
        setSelectedBusLine(event.target.value);
        setSelectedBusLine((state) => {
            console.log(busLine)
            return state; 
        })
    }


return (
    <div> 
        <div id="LightRailCategoryDiv">
            <img src="data:image/png;base64,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"
            alt="Metro Light Rail Icon"
            id="LightRailIcon" /> 
            METRO Light Rails
        </div>

        <div id="LightRailDivs"
        value={blueLine}
        onClick={test}
        >
            <span>
                <A href="/routes"
                onClick={() => window.location.reload(false)}
                > Blue Line </A>
            </span>
        </div>

        <div id="LightRailDivs"
        value={greenLine}
        >
            Green Line
        </div>

        {match || <div>  </div> }
    </div>
    );
}

export default LightRail; 