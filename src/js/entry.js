"use strict";

//import reactDom for browser rendering
import ReactDom from "react-dom";

import Index from './index';

ReactDom.render(
    <div>
        <Index />
    </div>,
    document.getElementById('app-container')
);
