"use strict"

//import React & ReactDOM for browser rendering
import React from 'react'
import {render} from "react-dom"
import Index from './containers/Index'

import 'semantic-ui-css/semantic.min.css'
import '/react/src/style/scss/global.scss'


render(
    <Index />,
    document.getElementById('app-container')
);
