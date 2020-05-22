<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of pacienteDAO
 *
 * @author ahtiq
 */
class medicaDAO {

    //put your code here

    private $sala;
    private $idAuto = 1;

    public function agregar($cedula, $nombre, $apellido, $eps) {
        $medicaVO = new medicaVO();
        $medicaVO->setCedula($cedula);
        $medicaVO->setNombre($nombre);
        $medicaVO->setApellido($apellido);
        $medicaVO->setEps($eps);
        $medicaVO->setId($this->getId());

        if (!$this->validarCc($medicaVO)) {
            $fp = fopen("../../class/BD/medicaBD.cvs", "a");
            fputs($fp, $medicaVO->linea());
            fclose($fp);
            return true;
        } else {
            return false;
        }
    }

    private function lectura() {
        $fp = fopen("../../class/BD/medicaBD.cvs", "r");
        $arregloMedi = array();
        while (!feof($fp)) {
            $linea = fgets($fp);
            if ($linea != "") {
                $arreglo = explode(";", $linea);
                $medicaVO = new medicaVO();
                $medicaVO->setId($arreglo[0]);
                $medicaVO->setCedula($arreglo[1]);
                $medicaVO->setNombre($arreglo[2]);
                $medicaVO->setApellido($arreglo[3]);
                $medicaVO->setEps($arreglo[4]);
                $arregloMedi[] = $medicaVO;
            }
        }
        fclose($fp);
        return $arregloMedi;
    }

    function eliminar($cc) {
        $arreglo = $this->lectura();
        unlink("../../class/BD/medicaBD.cvs");
        $fp = fopen("../../class/BD/medicaBD.cvs", "a");
        $estado = "no";
        for ($i = 0; $i < sizeof($arreglo); $i++) {
            $medicaVO = $arreglo[$i];
            if ($medicaVO->getCedula() != $cc) {
                fputs($fp, $medicaVO->linea2());
            } else {
                $estado = "si";
            }
        }
        fclose($fp);
        return $estado;
    }

    public function lecturaJson() {
        $fp = fopen("../../class/BD/medicaBD.cvs", "r");
        $arregloMedi = array();
        while (!feof($fp)) {
            $linea = fgets($fp);
            if ($linea != "") {
                $arreglo = explode(";", $linea);
                $medicaVO = new stdClass();
                $medicaVO->id = $arreglo[0];
                $medicaVO->cc = $arreglo[1];
                $medicaVO->nom = $arreglo[2];
                $medicaVO->ape = $arreglo[3];
                $medicaVO->eps = $arreglo[4];
                $arregloMedi[] = $medicaVO;
            }
        }
        fclose($fp);
        return $arregloMedi;
    }

    private function getId() {
        $edificio = $this->lectura();
        $limite = sizeof($edificio);
        for ($i = 0; $i < $limite; $i++) {
            $medicaVO = $edificio[$i];
            if ($medicaVO->getId() > $this->idAuto) {
                $this->idAuto = $medicaVO->getId();
            }
        }
        return ($this->idAuto + 1);
    }

    private function validarCc($medicaVa) {
        $edificio = $this->lectura();
        $limite = sizeof($edificio);
        for ($i = 0; $i < $limite; $i++) {
            $medicaVO = $edificio[$i];
            if ($medicaVO->getCedula() == $medicaVa->getCedula()) {
                return true;
            }
        }
        return false;
    }

}
