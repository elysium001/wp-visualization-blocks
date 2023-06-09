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

export function ChartJSBarChart(props) {
  return <>
    <h3>{props?.title}</h3>
    <Bar options={options} data={data} />
  </>;
}

export class ChartJSBarChartComponent extends HTMLElement {
  connectedCallback() {
    this.style.display = 'block';

    // get data from attribute
    const data = this.getAttribute('data');
    const title = this.getAttribute('data-title');

    // if data is json string, parse it
    const d = typeof data === 'string' ? JSON.parse(data) : data;

    const root = ReactDOM.createRoot(this);
    root.render(<ChartJSBarChart data={d} title={title}></ChartJSBarChart>);
  }
}