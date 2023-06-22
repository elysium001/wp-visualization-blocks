import { BarRechartReactComponent } from '../components/bar';

export class BarRechartWebComponent extends HTMLElement {

    connectedCallback() {

        this.style.display = 'block';

        // get data from attribute.
        const data = this.getAttribute('data');
        const title = this.getAttribute('data-title');

        // if data is json string, parse it.
        const d = typeof data === 'string' ? JSON.parse(data) : data;

        const root = ReactDOM.createRoot(this);
        root.render(<BarRechartReactComponent data={d} title={title}></BarRechartReactComponent>);
    }

}

customElements.define('recharts-bar', BarRechartWebComponent);
