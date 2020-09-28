<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Max-Age: 1000");
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
header("Access-Control-Allow-Methods: PUT,PATCH, POST, GET, OPTIONS, DELETE");

define('DB_HOST', 'localhost');
define('DB_USER', 'utente');
define('DB_PASS', 'passutente');
define('DB_NAME', 'PW');


function connect()
{
    $connect = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

    if (mysqli_connect_errno($connect)) {
        die("Failed to connect:" . mysqli_connect_errno());
    }
    mysqli_set_charset($connect, "utf8");
    return $connect;
}

$con = connect();
