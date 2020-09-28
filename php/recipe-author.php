<?php

require 'connect.php';
$id = $_GET['id'];
$recipes = [];
$sql = "SELECT * FROM `recipes` WHERE `autoreRic` = '{$id}' ORDER BY idRicetta DESC";

if ($result = mysqli_query($con, $sql)) {
    $i = 0;
    while ($row = mysqli_fetch_assoc($result)) {
        $recipes[$i]['idRicetta'] = $row['idRicetta'];
        $recipes[$i]['titolo'] = $row['titolo'];
        $recipes[$i]['categoria'] = $row['categoria'];
        $recipes[$i]['dieta'] = $row['dieta'];
        $recipes[$i]['tempo'] = $row['tempo'];
        $recipes[$i]['cottura'] = $row['cottura'];
        $recipes[$i]['porzioni'] = $row['porzioni'];
        $recipes[$i]['descr'] = $row['descr'];
        $recipes[$i]['ingr'] = $row['ingr'];
        $recipes[$i]['prep'] = $row['prep'];
        $recipes[$i]['cons'] = $row['cons'];
        $recipes[$i]['img'] = $row['img'];
        $recipes[$i]['autoreRic'] = $row['autoreRic'];
        $recipes[$i]['video'] = $row['video'];


        $i++;
    }
    echo json_encode($recipes);
} else {
    http_response_code(404);
}
