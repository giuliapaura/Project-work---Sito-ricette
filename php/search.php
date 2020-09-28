<?php

require 'connect.php';
$cerca = $_GET['term'];
$risultati = [];
$sql = "SELECT * FROM `recipes` WHERE `titolo` LIKE '%{$cerca}%'";


if ($result = mysqli_query($con, $sql)) {
    $i = 0;
    while ($row = mysqli_fetch_assoc($result)) {
        $risultati[$i]['idRicetta'] = $row['idRicetta'];
        $risultati[$i]['titolo'] = $row['titolo'];
        $risultati[$i]['categoria'] = $row['categoria'];
        $risultati[$i]['dieta'] = $row['dieta'];
        $risultati[$i]['tempo'] = $row['tempo'];
        $risultati[$i]['cottura'] = $row['cottura'];
        $risultati[$i]['porzioni'] = $row['porzioni'];
        $risultati[$i]['descr'] = $row['descr'];
        $risultati[$i]['ingr'] = $row['ingr'];
        $risultati[$i]['prep'] = $row['prep'];
        $risultati[$i]['cons'] = $row['cons'];
        $risultati[$i]['img'] = $row['img'];
        $risultati[$i]['autoreRic'] = $row['autoreRic'];
        $risultati[$i]['video'] = $row['video'];


        $i++;
    }
    echo json_encode($risultati);
} else {
    http_response_code(404);
    die();
}


// $result = mysqli_query($con, $sql);
// $row = mysqli_fetch_assoc($result);

// echo $json = json_encode($row);

// exit;
