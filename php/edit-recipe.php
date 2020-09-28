<?php

require 'connect.php';

$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
    $request = json_decode($postdata);

    //Sanitize
    $id = mysqli_real_escape_string($con, (int) $_GET['id']);
    $titolo = mysqli_real_escape_string($con, trim($request->titolo));
    $categoria = mysqli_real_escape_string($con, trim($request->categoria));
    $dieta = mysqli_real_escape_string($con, trim($request->dieta));
    $tempo = mysqli_real_escape_string($con, (int) $request->tempo);
    $cottura = mysqli_real_escape_string($con, (int) $request->cottura);
    $porzioni = mysqli_real_escape_string($con, trim($request->porzioni));
    $descr = mysqli_real_escape_string($con, trim($request->descr));
    $ingr = mysqli_real_escape_string($con, trim($request->ingr));
    $prep = mysqli_real_escape_string($con, trim($request->prep));
    $cons = mysqli_real_escape_string($con, trim($request->cons));
    $img = mysqli_real_escape_string($con, trim($request->img));
    $autoreRic = mysqli_real_escape_string($con, trim($request->autoreRic));
    $video = mysqli_real_escape_string($con, trim($request->video));


    // Update
    $sql = "UPDATE `recipes` SET `titolo` = '$titolo', `categoria` = '$categoria', `dieta` = '$dieta', `tempo` = '$tempo', `cottura` = '$cottura', `porzioni` = '$porzioni', `descr` = '$descr', `ingr` = '$ingr', `prep` = '$prep', `cons` = '$cons', `img` = '$img', `autoreRic` = '$autoreRic', `video` = '$video' WHERE `idRicetta` = '{$id}' LIMIT 1";

    if (mysqli_query($con, $sql)) {
        http_response_code(204);
    } else {

        return http_response_code(422);
    }
}
