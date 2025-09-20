<?php

$root = "";
$user = "user";
$password = "";
$database = "Caredent";

$connessione = new mysqli($root, $user, $password, $database);

if($connessione->connect_error) {
    die("Errore durante la connessione al database" . $connessione->connect_error);
}
