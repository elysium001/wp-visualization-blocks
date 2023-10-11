import { OmarsDemoReactComponent } from '../components/demo';

export class OmarsDemoWebComponent extends HTMLElement {

    connectedCallback() {

        this.style.display = 'block';

        // get data from attribute.
        const data = this.getAttribute('data');
        const title = this.getAttribute('data-title');

        // if data is json string, parse it.
        const d = typeof data === 'string' ? JSON.parse(data) : data;

        const root = ReactDOM.createRoot(this);
        root.render(<OmarsDemoReactComponent data={d} title={title}></OmarsDemoReactComponent>);
    }

}

customElements.define('omars-demo', OmarsDemoWebComponent);
