<?php

require_once '../config.php';
require '../objects/persona.php';

$user = new Persona($_POST['nome'], $_POST['cognome'], $_POST['data_nascita'], $_POST['luogo_nascita'], $_POST['email'], $_POST['password']);

$stmt = $connessione->prepare("INSERT INTO users (nome, cognome, data_nascita, luogo_nascita, email, password) VALUES (?, ?, ?, ?, ?, ?)"); 
//non potento passare direttamente il get in bind param
//utilizzo la variabile $hash
$hash = $persona->getPasswordHash();
$stmt->bind_param('ssssss', $user->nome, $user->cognome, $user->dataNascita, $user->luogoNascita, $user->email, $hash);

try {
    if($stmt->execute()) {
        $data = [
            "messaggio" => "Utente registrato con successo",
            "response" => 1
        ];
        echo json_encode($data);
    }
} catch (mysqli_sql_exception $e) {
    if($e->getCode() === 1062) {
        $data = [
            "messaggio" => "Email già presente",
            "response" => 0
        ];
        echo json_encode($data);
    } else {
        $data = [
            "messaggio"=> "Errore nel DB " , $e->getMessage(),
            "response"=> 0
        ];
    }
}