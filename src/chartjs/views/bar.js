import React from 'react';
import ReactDOM from 'react-dom';
import {ChartJSBarChart} from '../components/bar';


// on dom ready.
document.addEventListener('DOMContentLoaded', () => {
    // get the root element.
    const root = document.getElementById('chartJS-bar-root');
    
    // get props from the root element.
    const props = Object.assign({}, root.dataset);
    
    const element = <ChartJSBarChart {...props}/>;

    // render the element.
    ReactDOM.render(element, root);
}   );

