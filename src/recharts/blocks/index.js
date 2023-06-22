/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import {
    useBlockProps,
    InspectorControls,
} from '@wordpress/block-editor';
import { TextControl, ComboboxControl } from '@wordpress/components';

// import '../views/bar';
import { BarRechartReactComponent } from '../components/bar';

// data fetch...
let data1 = [
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
  ];

  let data2 = [
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
    }
];

let defaultData = [
    { "name": 'Page A', "uv": 4000, "pv": 2400 },
    { "name": 'Page B', "uv": 3000, "pv": 1398 },
    { "name": 'Page C', "uv": 2000, "pv": 9800 }
];

// Register the block
registerBlockType('wp-visualization-plugins/recharts-bar-block', {
    attributes: {
        title: {
            type: 'string',
            default: 'ReCharts Bar Chart 123',
        },
        data: {
            type: 'array',
            default: defaultData
        }
    },
    edit: (props) => {
        const { title, data } = props.attributes;

        return (<div {...useBlockProps()}>
            <InspectorControls key="setting">
                <div id="gutenpride-controls">
                    <fieldset>
                        <legend className="blocks-base-control__label">
                            {__('Title', 'gutenpride')}
                        </legend>
                        <TextControl value={title} onChange={(value) => props.setAttributes({ title: value })} />
                        <ComboboxControl 
                            label={__('Data', 'gutenpride')} 
                            value={data} 
                            options={[ { label: 'default', value: defaultData }, { label: 'data1', value: data1 }, { label: 'data2', value: data2 } ]} 
                            onChange={(value) => props.setAttributes({ data: value })} />
                    </fieldset>
                </div>
            </InspectorControls>
            <p>{title}</p>
            <BarRechartReactComponent title={title} data={data}></BarRechartReactComponent>
        </div>)
    },
    save: () => null,
});