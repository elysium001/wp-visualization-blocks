<?php

// Get block attributes.
$title = $attributes['title'] ?? 'Default Title';
$data = json_encode($attributes['data'] ?? []);

// add dataset to element.
echo "<recharts-bar id=\"my-chart\" data-title=\"$title\" data='$data'></recharts-bar>";

// Requires additional web component logic to update data.
// echo "<script>document.getElementById('my-chart').data = $data;</script>";