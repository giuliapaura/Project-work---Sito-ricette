<?php

require 'connect.php';

// $id = $_GET['id'];
$id = ($_GET['id'] !== null && (int) $_GET['id'] > 0) ? mysqli_real_escape_string($con, (int) $_GET['id']) : false;
$sql = "DELETE FROM `users` WHERE `idUser` = '{$id}' LIMIT 1";

if (!$id) {
    return http_response_code(400);
}

if (mysqli_query($con, $sql)) {

    http_response_code(204);
} else {

    return http_response_code(422);
}
