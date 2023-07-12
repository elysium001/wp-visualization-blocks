// import wp-scripts config
const wpConfig = require('@wordpress/scripts/config/webpack.config');

// use BrowserSyncPlugin to refresh browser in either the editor or the frontend.
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

// extend wp-scripts config
module.exports = {
    ...wpConfig,
    entry: {
        'd3-index': './src/d3/index.js',
        'd3-view': './src/d3/views/bar.js',
        'plotly-index': './src/plotly/index.js',
        'plotly-view': './src/plotly/views/bar.js',
        'chartjs-index': './src/chartjs/index.js',
        'chartjs-view': './src/chartjs/views/bar.js',
        'recharts-index': './src/recharts/index.js',
        'recharts-view': './src/recharts/views/bar.js',
    },
    output: {
        ...wpConfig.output,
        filename: '[name].js',
    },
    plugins: [
        ...wpConfig.plugins,
  
        new BrowserSyncPlugin({
          host: 'omars-local.vipdev.lndo.site',
          port: 8887,
          proxy: 'http://omars-local.vipdev.lndo.site/', //docker container host
          open: false
        }),
      ]
};

