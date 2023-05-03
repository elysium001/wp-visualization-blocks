import React from 'react';
import ReactDOM from 'react-dom';
import {ChartJSBarChart} from '../components/bar';

const element = <ChartJSBarChart/>;

// on dom ready.
document.addEventListener('DOMContentLoaded', () => {
    // get the root element.
    const root = document.getElementById('chartJS-bar-root');

    // render the element.
    ReactDOM.render(element, root);
}   );

