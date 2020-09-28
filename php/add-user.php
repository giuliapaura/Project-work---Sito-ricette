<?php

require 'connect.php';
$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
    $request = json_decode($postdata);

    // Validate
    // if (trim($request->recTitle) === '' || trim($request->recCat) === '' || trim($request->recDiff) === '') {
    //     return http_response_code(400);
    // }

    // Sanitize
    $nome = mysqli_real_escape_string($con, trim($request->nome));
    $cognome = mysqli_real_escape_string($con, trim($request->cognome));
    $username = mysqli_real_escape_string($con, trim($request->username));
    $password = mysqli_real_escape_string($con, trim($request->password));
    $token = mysqli_real_escape_string($con, trim($request->token));
    $scadenza = mysqli_real_escape_string($con, trim($request->scadenza));

    // Inserisci
    $sql = "INSERT INTO `users`(
        `nome`,
        `cognome`,
        `username`,
        `password`,
        `token`,
        `scadenza`) VALUES (
            '{$nome}',
            '{$cognome}',
            '{$username}',
            '{$password}',
            '{$token}',
            '{$scadenza}')";
    if (mysqli_query($con, $sql)) {
        http_response_code(201);
        // $recipe = [
        //     'recTitle' => $recTitle,
        //     'recCat' => $recCat,
        //     'recDiff' => $recDiff
        // ];
        // echo json_encode($recipe);
    } else {
        http_response_code(422);
    }
}
