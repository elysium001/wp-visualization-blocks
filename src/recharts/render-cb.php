<?php

// Get block attributes.
$title = $attributes['title'] ?? 'Default Title';

// add dataset to element.
echo "<recharts-bar data-title=\"$title\"></recharts-bar>";
