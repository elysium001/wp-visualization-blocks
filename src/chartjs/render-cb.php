<?php

// Get block attributes.
$title = $attributes['title'] ?? 'Default Title';

// add dataset to element.
echo "<chartjs-bar data-title=\"$title\"></chartjs-bar>";
