"use strict";

//import react and reactDom for browser rendering
import React from "react";
import ReactDom from "react-dom";

//this project
import Example from './../src/js/index';

//render example component
ReactDom.render(
    <Example />,
    document.getElementById('app-container')
);

