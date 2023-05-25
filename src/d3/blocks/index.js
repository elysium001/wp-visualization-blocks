/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';

import { D3BarChart } from '../components/bar';

// Register the block
registerBlockType( 'wp-visualization-plugins/d3-block', {
    edit: () => {
        return <div {...useBlockProps()}> 
            <p> Hello world (D3JS component, from the editor)</p>

            {/* Account for render cb implementation. */}
            <D3BarChart />
        </div>;
    },
    save: () => null,
} );