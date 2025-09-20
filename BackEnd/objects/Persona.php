<?php

class Persona {
    public $nome;
    public $cognome;
    public $dataNascita;
    public $luogoNascita;
    public $email;
    private $password;

    public function __construct ($nome, $cognome, $dataNascita, $luogoNascita, $email, $passwordHash) {
        $this->nome = $nome;
        $this->cognome = $cognome;
        $this->dataNascita = $dataNascita;
        $this->luogoNascita = $luogoNascita;
        $this->email = $email;
        //procedo subito alla criptazione della password
        $this->password = $passwordHash;
    }

    public function setNome($nome) {
        $this->nome = $nome;
    }

    public function getNome() {
        return $this->nome;
    }

    public function setCognome($cognome) {
        $this->cognome = $cognome;
    }

    public function getCognome() {
        return $this->cognome;
    }

    public function setDataNascita($dataNascita) {
        $this->dataNascita = $dataNascita;
    }

    public function getDataNascita() {
        return $this->dataNascita;
    }

    public function setLuogoNascita($luogoNascita) {
        $this->luogoNascita = $luogoNascita;
    }

    public function getLuogoNascita() {
        return $this->luogoNascita;
    }

    public function getFullName() {
        return $this->nome . " " . $this->cognome;
    }

    public function setPassword($password, $isHashed = false) {
        //mettiamo la condizione 
        $this->password = $isHashed ? $password : password_hash($password, PASSWORD_DEFAULT);
    }

    //get dell hash non mandiamo mai la password in chiaro
    public function getPasswordHash() {
        return $this->password;
    }

}