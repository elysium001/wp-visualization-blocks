import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

function ChartJSBarChart(props) {
  return <>
    <h3>{props?.title}</h3>
    <Bar options={options} data={data} />
  </>;
}

const customBarChartStyle = document.createElement('customBarChartStyle');
customBarChartStyle.innerHTML = `
  <style>
    chartjs-bar {
      display: block;
    }
  </style>`;

export class ChartJSBarChartComponent extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement('div');
    // this.attachShadow({ mode: 'open' }).appendChild(mountPoint);
    this.appendChild(customBarChartStyle);
    this.appendChild(mountPoint);

    const root = ReactDOM.createRoot(mountPoint);
    root.render(<ChartJSBarChart {...this.props}></ChartJSBarChart>);
  }
}