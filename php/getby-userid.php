<?php

require 'connect.php';
$id = $_GET['id'];

$sql = "SELECT * FROM `users` WHERE `idUser` = '{$id}' LIMIT 1";

$result = mysqli_query($con, $sql);
$row = mysqli_fetch_assoc($result);

echo $json = json_encode($row);

exit;
