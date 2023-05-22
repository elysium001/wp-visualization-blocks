/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';
import '../views/bar';

// Register the block
registerBlockType( 'wp-visualization-plugins/plotly-bar-block', {
    edit: () => {
        return <div {...useBlockProps()}> 
            <p> Hello world (PlotlyBarChart component from the editor)</p>

            {/* Account for render cb implementation. */}
            <plotly-bar />
        </div>;
    },
    save: () => null,
} );