// Import packages
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import {
    useBlockProps,
    InspectorControls,
} from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';
import { OmarsDemoReactComponent } from '../components/demo';


// Register the block
registerBlockType('omars-plugins/demo-block', {
    attributes: {
        title: {
            type: 'string',
            default: 'Omars demo string example',
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
                        <TextControl
                            value={title}
                            onChange={(value) => props.setAttributes({ title: value })} />
                    </fieldset>
                </div>
            </InspectorControls>
            <p>{title}</p>
            <OmarsDemoReactComponent title={title} data={data}></OmarsDemoReactComponent>
        </div>)
    },
    save: () => null,
});