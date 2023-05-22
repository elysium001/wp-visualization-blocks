import Plot from 'react-plotly.js';


function PlotlyBarFn() {

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

const customBarChartStyle = document.createElement('customBarChartStyle');
customBarChartStyle.innerHTML = `
  <style>
  plotly-bar {
      display: block;
    }
  </style>`;

export class PlotlyBarChartComponent extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement('div');
    // this.attachShadow({ mode: 'open' }).appendChild(mountPoint);
    this.appendChild(customBarChartStyle);
    this.appendChild(mountPoint);

    const root = ReactDOM.createRoot(mountPoint);
    root.render(<PlotlyBarFn {...this.props}></PlotlyBarFn>);
  }
}