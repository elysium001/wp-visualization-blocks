import React from 'react';
import ReactDOM from 'react-dom';
import PlotlyBarChart from '../components/bar';

const element = <PlotlyBarChart/>;

// on dom ready.
document.addEventListener('DOMContentLoaded', () => {
    // get the root element.
    const root = document.getElementById('plotly-bar-root');

    // render the element.
    ReactDOM.render(element, root);
}   );

