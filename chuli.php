<?php

$json_url 	= 'data.json';
$json 		= json_decode(file_get_contents($json_url));
print_r($json);

//
$json->update = $_POST['update'];


file_put_contents($json_url, json_encode($json));

