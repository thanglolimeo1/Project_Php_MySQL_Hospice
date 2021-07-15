<?php 
session_start();
session_destroy();
header("Location: ../../spatial/index.php");
?>