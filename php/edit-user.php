<?php

require 'connect.php';

$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
    $request = json_decode($postdata);

    //Sanitize
    $id = mysqli_real_escape_string($con, (int) $_GET['id']);
    $nome = mysqli_real_escape_string($con, trim($request->nome));
    $cognome = mysqli_real_escape_string($con, trim($request->cognome));
    $username = mysqli_real_escape_string($con, trim($request->username));
    $password = mysqli_real_escape_string($con, trim($request->password));


    // Update
    $sql = "UPDATE `users` SET `nome` = '$nome', `cognome` = '$cognome', `username` = '$username', `password` = '$password' WHERE `idUser` = '{$id}' LIMIT 1";

    if (mysqli_query($con, $sql)) {
        http_response_code(204);
    } else {

        return http_response_code(422);
    }
}
