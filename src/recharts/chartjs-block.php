<?php

declare(strict_types=1);

namespace WP_VIS_PLUGIN;

class ReCharts_Block
{
	// register block.
	public function __construct()
	{
		\register_block_type(__DIR__);
	}

}
