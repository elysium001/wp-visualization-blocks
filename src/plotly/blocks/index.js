/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

import PlotlyBarChart from '../components/bar';

// Register the block
registerBlockType( 'wp-visualization-plugins/plotly-bar-block', {
    edit: () => {
        return <> 
            <p> Hello world (from the editor)</p>

            {/* Account for render cb implementation. */}
            <PlotlyBarChart />
        </>;
    },
    save: () => null,
} );