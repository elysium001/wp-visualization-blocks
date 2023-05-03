/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

import { ChartJSBarChart } from '../components/bar';

// Register the block
registerBlockType( 'wp-visualization-plugins/chartjs-bar-block', {
    edit: () => {
        return <> 
            <p> Hello world (from the editor)</p>

            {/* Account for render cb implementation. */}
            <ChartJSBarChart />
        </>;
    },
    save: () => null,
} );