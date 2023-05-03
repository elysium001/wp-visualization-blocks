import React from 'react';
import ReactDOM from 'react-dom';
import BarChart from '../components/bar';

const element = <BarChart/>;

// on dom ready.
document.addEventListener('DOMContentLoaded', () => {
    // get the root element.
    const root = document.getElementById('d3-bar-root');

    // render the element.
    ReactDOM.render(element, root);
}   );

