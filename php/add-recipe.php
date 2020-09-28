<?php

require 'connect.php';
$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
    $request = json_decode($postdata);

    // Validate


    // Sanitize
    $titolo = mysqli_real_escape_string($con, trim($request->titolo));
    $categoria = mysqli_real_escape_string($con, trim($request->categoria));
    $dieta = mysqli_real_escape_string($con, trim($request->dieta));
    $tempo = mysqli_real_escape_string($con, (int) $request->tempo);
    $cottura = mysqli_real_escape_string($con, (int) $request->cottura);
    $porzioni = mysqli_real_escape_string($con, ($request->porzioni));
    $descr = mysqli_real_escape_string($con, trim($request->descr));
    $ingr = mysqli_real_escape_string($con, trim($request->ingr));
    $prep = mysqli_real_escape_string($con, trim($request->prep));
    $cons = mysqli_real_escape_string($con, trim($request->cons));
    $img = mysqli_real_escape_string($con, trim($request->img));
    $autoreRic = mysqli_real_escape_string($con, trim($request->autoreRic));
    $video = mysqli_real_escape_string($con, trim($request->video));


    // Inserisci
    $sql = "INSERT INTO `recipes`(
        `titolo`,
        `categoria`,
        `dieta`,
        `tempo`,
        `cottura`,
        `porzioni`,
        `descr`,
        `ingr`,
        `prep`,
        `cons`,
        `img`,
        `autoreRic`,
        `video`) VALUES (
            '{$titolo}',
            '{$categoria}',
            '{$dieta}',
            '{$tempo}',
            '{$cottura}',
            '{$porzioni}',
            '{$descr}',
            '{$ingr}',
            '{$prep}',
            '{$cons}',
            '{$img}',
            '{$autoreRic}',
            '{$video}')";
    if (mysqli_query($con, $sql)) {
        http_response_code(201);
    } else {
        http_response_code(422);
    }
}
