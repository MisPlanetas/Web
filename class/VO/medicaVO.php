<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of paciente
 *
 * @author ahtiq
 */
class medicaVO {

    //put your code here
    private $id;
    private $cedula;
    private $nombre;
    private $apellido;
    private $eps;

    public function __construct() {
        
    }

    public function linea() {
        return $this->id . ";" . $this->cedula . ";" . $this->nombre . ";" . $this->apellido . ";" . $this->eps . PHP_EOL;
    }

    public function linea2() {
        return $this->id . ";" . $this->cedula . ";" . $this->nombre . ";" . $this->apellido . ";" . $this->eps;
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

    public function getEps() {
        return $this->eps;
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

    public function setEps($eps) {
        $this->eps = $eps;
    }

}
