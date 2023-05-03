<?php

// Get block attributes.
$title = $attributes['title'] ?? 'Default Title';

// add dataset to element.
echo "<div id=\"chartJS-bar-root\" data-title=\"$title\"></div>";
