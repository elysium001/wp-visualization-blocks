/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import {
    useBlockProps,
    InspectorControls,
} from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';

import '../views/bar';

// Register the block
registerBlockType('wp-visualization-plugins/recharts-bar-block', {
    attributes: {
        title: {
            type: 'string',
            default: 'ReCharts Bar Chart 123',
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
            <recharts-bar title={title}></recharts-bar>
        </div>)
    },
    save: () => null,
});