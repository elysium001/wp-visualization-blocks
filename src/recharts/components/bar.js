import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer } from 'recharts';

export function BarChartRender(props) {
  
  return <>
    <h3>{props?.title}</h3>
    <ResponsiveContainer width="100%" height={250}>
      <BarChart  data={props?.data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  </>;
}

export class ReChartsBarChart extends HTMLElement {

  connectedCallback() {

    this.style.display = 'block';

    // get data from attribute
    const data = this.getAttribute('data');

    // if data is json string, parse it
    const d = typeof data === 'string' ? JSON.parse(data) : data;

    const root = ReactDOM.createRoot( this );
    root.render(<BarChartRender data={d}></BarChartRender>);
  }

}
