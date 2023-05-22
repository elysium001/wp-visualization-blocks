// import React from 'react';
// import ReactDOM from 'react-dom';
import {ReChartsBarChart} from '../components/bar';


// on dom ready.
// document.addEventListener('DOMContentLoaded', () => {
//     // get the root element.
//     const root = document.getElementById('recharts-bar-root');
    
//     // get props from the root element.
//     const props = Object.assign({}, root?.dataset);
    
//     const element = <ReChartsBarChart {...props}/>;

//     // render the element.
//     ReactDOM.render(element, root);
// }   );

customElements.define('recharts-bar', ReChartsBarChart);
