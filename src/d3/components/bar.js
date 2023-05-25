import React, { Component } from 'react'
import * as d3 from 'd3';


export class D3BarChart extends Component {
    constructor(props) {
        super(props)
        this.myReference = React.createRef();
        this.data = [
            { Country: "United States", Value: 12394 },
            { Country: "Russia", Value: 6148 },
            { Country: "Germany (FRG)", Value: 1653 },
            { Country: "France", Value: 2162 },
            { Country: "United Kingdom", Value: 1214 },
            { Country: "China", Value: 1131 },
            { Country: "Spain", Value: 814 },
            { Country: "Netherlands", Value: 1167 },
            { Country: "Italy", Value: 660 },
            { Country: "Israel", Value: 1263 }
        ]
    }

    componentDidMount() {
        this.buildBars();
    }

    buildBars() {
        // set the dimensions and margins of the graph
        var margin = { top: 30, right: 30, bottom: 70, left: 60 },
            width = 460 - margin.left - margin.right,
            height = 400 - margin.top - margin.bottom;

        // append the svg object to the body of the page
        var svg = d3.select(this.myReference.current)
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");

        // X axis
        var x = d3.scaleBand()
        .range([0, width])
        .domain(this.data.map(function (d) { return d.Country; }))
        .padding(0.2);
        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x))
            .selectAll("text")
            .attr("transform", "translate(-10,0)rotate(-45)")
            .style("text-anchor", "end");

        // Add Y axis
        var y = d3.scaleLinear()
            .domain([0, 13000])
            .range([height, 0]);
        svg.append("g")
            .call(d3.axisLeft(y));

        // Bars
        svg.selectAll("mybar")
            .data(this.data)
            .enter()
            .append("rect")
            .attr("x", function (d) { return x(d.Country); })
            .attr("y", function (d) { return y(d.Value); })
            .attr("width", x.bandwidth())
            .attr("height", function (d) { return height - y(d.Value); })
            .attr("fill", "#69b3a2")
    }

    render() {
        return (
            <div ref={this.myReference}></div>
        );
    }
}


export class D3BarChartComponent extends HTMLElement {
  connectedCallback() {
    this.style.display = 'block';

    // get data from attribute
    const data = this.getAttribute('data');

    // if data is json string, parse it
    const d = typeof data === 'string' ? JSON.parse(data) : data;

    const root = ReactDOM.createRoot(this);
    root.render(<D3BarChart></D3BarChart>);
  }
}