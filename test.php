<?php
$a = 1;
$b =& $a;
unset($b);

$a = 'a';
$b = 'b';
echo $a . $b;
?>