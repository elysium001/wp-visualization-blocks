<?php

// Get block attributes.
$title = $attributes['title'] ?? 'Default Title';
$data = json_encode($attributes['data'] ?? []);

// add dataset to element.
echo "<omars-demo data-title=\"$title\" data='$data'></recharts-bar>";
