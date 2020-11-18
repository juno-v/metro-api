import React from 'react';
import PropTypes from 'prop-types';
import LightRail from "../LightRail/LightRail";  
import Routes from "../Routes/Routes"; 

const Landing = () => {
    return (
        <div>
            <LightRail /> 
            <Routes /> 
        </div>
    );
};

Landing.propTypes = {};

export default Landing;