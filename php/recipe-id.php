<?php

require 'connect.php';
$id = $_GET['id'];

$sql = "SELECT * FROM `recipes` WHERE `idRicetta` = '{$id}' LIMIT 1";

$result = mysqli_query($con, $sql);
$row = mysqli_fetch_assoc($result);

echo $json = json_encode($row);

exit;
