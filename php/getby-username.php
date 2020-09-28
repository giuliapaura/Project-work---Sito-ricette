<?php

require 'connect.php';
$username = $_GET['username'];

$sql = "SELECT * FROM `users` WHERE `username` = '{$username}' LIMIT 1";

$result = mysqli_query($con, $sql);
$row = mysqli_fetch_assoc($result);

echo $json = json_encode($row);

exit;
