/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import {
    useBlockProps,
    ColorPalette,
    InspectorControls,
} from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';

import { ChartJSBarChart } from '../components/bar';

// Register the block
registerBlockType('wp-visualization-plugins/chartjs-bar-block', {
    attributes: {
        title: {
            type: 'string',
            default: 'ChartJS Bar Chart 123',
        },
    },
    edit: (props) => {
        const { title } = props.attributes;

        return (<div {...useBlockProps()}>
            <InspectorControls key="setting">
                <div id="gutenpride-controls">
                    <fieldset>
                        <legend className="blocks-base-control__label">
                            {__('Title', 'gutenpride')}
                        </legend>
                        <TextControl value={title} onChange={(value) => props.setAttributes({ title: value })} />
                    </fieldset>
                </div>
            </InspectorControls>
            <p>{title}</p>
            <ChartJSBarChart />
        </div>)
    },
    save: () => null,
});