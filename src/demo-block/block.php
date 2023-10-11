<?php

declare(strict_types=1);

namespace OMARS_PLUGIN;

class Demo_Block
{
	// register block.
	public function __construct()
	{
		\register_block_type(__DIR__);
	}

}
