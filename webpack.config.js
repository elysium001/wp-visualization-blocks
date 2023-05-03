// import wp-scripts config
const wpConfig = require('@wordpress/scripts/config/webpack.config');

// extend wp-scripts config
module.exports = {
    ...wpConfig,
    entry: {
        'd3-index': './src/d3/index.js',
        'd3-view': './src/d3/views/bar.js',
        'plotly-index': './src/plotly/index.js',
        'plotly-view': './src/plotly/views/bar.js',
    },
    output: {
        ...wpConfig.output,
        filename: '[name].js',
    },
};

