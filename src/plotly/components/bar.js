import Plot from 'react-plotly.js';


export function PlotlyBarFn() {

  return (
    <Plot
      data={[
        {
          x: [1, 2, 3],
          y: [2, 6, 3],
          type: 'scatter',
          mode: 'lines+markers',
          marker: { color: 'red' },
        },
        {
          type: 'bar',
          x: [1, 2, 3],
          y: [2, 5, 3],
          marker: {
            color: ['rgba(204,204,204,1)', 'rgba(222,45,38,0.8)', 'rgba(204,204,204,1)']
          },
        },
      ]}
      layout={{ autosize: true, title: 'A Fancy Plotly plot' }}
      useResizeHandler={true}
      style={{ width: "100%", height: "100%" }}
    />
  );
}

export class PlotlyBarChartComponent extends HTMLElement {
  connectedCallback() {
    this.style.display = 'block';

    // get data from attribute
    const data = this.getAttribute('data');

    // if data is json string, parse it
    const d = typeof data === 'string' ? JSON.parse(data) : data;

    const root = ReactDOM.createRoot(this);
    root.render(<PlotlyBarFn data={d}></PlotlyBarFn>);
  }
}