<?php

/**
 * Plugin Name: WP Vis Plugin
 * Plugin URI:
 * 
 **/

// strict types
declare(strict_types=1);

namespace WP_VIS_PLUGIN;

// Exit if accessed directly
defined( 'ABSPATH' ) || exit;

// define constants
define('WP_VIS_PLUGIN_DIR', plugin_dir_path(__FILE__));
define('WP_VIS_PLUGIN_URL', plugin_dir_url(__FILE__));
define('WP_VIS_PLUGIN_FILE', __FILE__);
define('WP_VIS_PLUGIN_BASENAME', plugin_basename(__FILE__));
define('WP_VIS_PLUGIN_VERSION', '1.0.0');

// load composer autoload
require_once WP_VIS_PLUGIN_DIR . 'vendor/autoload.php';

use WP_VIS_PLUGIN\Plotly_Block;
use WP_VIS_PLUGIN\D3_Block;
use WP_VIS_PLUGIN\ChartJS_Block;

// load plugin blocks
add_action('init', function () {
    new D3_Block();
    new Plotly_Block();
    new ChartJS_Block();
});
