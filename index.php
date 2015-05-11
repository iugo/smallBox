<?php

$json_url 	= 'data.json';

// 如果文件存在, 则读取文件中的数据.
$json 		= json_decode(file_get_contents($json_url));

?>

<form action="chuli.php" method="post">
    <input type="text" name="update">
    <button type="submit">jiao</button>
</form>