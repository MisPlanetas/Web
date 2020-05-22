<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of medicoVO
 *
 * @author ahtiq
 */
class medicoVO {

    //put your code here
    private $id;
    private $cedula;
    private $nombre;
    private $apellido;
    private $profesion;
    private $email;

    public function __construct() {
        
    }

    public function linea() {
        return $this->id . ";" . $this->cedula . ";" . $this->nombre . ";" . $this->apellido . ";" . $this->profesion . ";" . $this->email . PHP_EOL;
    }

    public function linea2() {
        return $this->id . ";" . $this->cedula . ";" . $this->nombre . ";" . $this->apellido . ";" . $this->profesion . ";" . $this->email;
    }

    public function getId() {
        return $this->id;
    }

    public function getCedula() {
        return $this->cedula;
    }

    public function getNombre() {
        return $this->nombre;
    }

    public function getApellido() {
        return $this->apellido;
    }

    public function getProfesion() {
        return $this->profesion;
    }

    public function getEmail() {
        return $this->email;
    }

    public function setId($id) {
        $this->id = $id;
    }

    public function setCedula($cedula) {
        $this->cedula = $cedula;
    }

    public function setNombre($nombre) {
        $this->nombre = $nombre;
    }

    public function setApellido($apellido) {
        $this->apellido = $apellido;
    }

    public function setProfesion($profesion) {
        $this->profesion = $profesion;
    }

    public function setEmail($email) {
        $this->email = $email;
    }

}
