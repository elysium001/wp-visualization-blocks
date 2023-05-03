/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

import BarChart from './../components/bar.js'

// Register the block
registerBlockType( 'wp-visualization-plugins/d3-block', {
    edit: () => {
        return <> 
            <p> Hello world (from the editor)</p>

            {/* Account for render cb implementation. */}
            <BarChart />
        </>;
    },
    save: () => null,
} );