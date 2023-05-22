import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer } from 'recharts';

const data = [
  {
    "name": "Page A",
    "uv": 4000,
    "pv": 2400
  },
  {
    "name": "Page B",
    "uv": 3000,
    "pv": 1398
  },
  {
    "name": "Page C",
    "uv": 2000,
    "pv": 9800
  },
  {
    "name": "Page D",
    "uv": 2780,
    "pv": 3908
  },
  {
    "name": "Page E",
    "uv": 1890,
    "pv": 4800
  },
  {
    "name": "Page F",
    "uv": 2390,
    "pv": 3800
  },
  {
    "name": "Page G",
    "uv": 3490,
    "pv": 4300
  }
]

function BarChartRender(props) {
  return <>
    <h3>{props?.title}</h3>
    <ResponsiveContainer width="100%" height={250}>
      <BarChart  data={data}>
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

const customBarChartStyle = document.createElement('customBarChartStyle');
customBarChartStyle.innerHTML = `
  <style>
    recharts-bar {
      display: block;
    }
  </style>`;

export class ReChartsBarChart extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement('div');
    // this.attachShadow({ mode: 'open' }).appendChild(mountPoint);
    this.appendChild(customBarChartStyle);
    this.appendChild(mountPoint);

    const root = ReactDOM.createRoot(mountPoint);
    root.render(<BarChartRender {...this.props}></BarChartRender>);
  }
}
