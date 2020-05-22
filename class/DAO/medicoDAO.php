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
class medicoDAO {

    //put your code here

    private $idAuto = 1;

    public function agregar($cedula, $nombre, $apellido, $profesion, $email) {
        $medicoVO = new medicoVO();
        $medicoVO->setCedula($cedula);
        $medicoVO->setNombre($nombre);
        $medicoVO->setApellido($apellido);
        $medicoVO->setProfesion($profesion);
        $medicoVO->setEmail($email);
        //$medicoVO->setId($this->getId());

         $BD = new conectar();
        $smpt = $BD->stmp("insert into medico (nombre,apellido,correo,profesion,cc) values (?,?,?,?,?);");

        /*
         * S String texto
         * i numero entero
         * D numero flotantes con des
         * B block
         */
        $smpt->bind_param("sssss", $medicoVO->getNombre(), $medicoVO->getApellido(), $medicoVO->getEmail(), $medicoVO->getProfesion(), $medicoVO->getCedula());

        return $BD->ExecuteQuery($smpt);
    }

    public function lectura() {
        
          $BD = new conectar();
        $stmp=$BD->stmp ("Select * from medico order by apellido;");
        return $BD->listaData($stmp);
                
    }

	
    function eliminar($cod) {
        $medicoVO = new medicoVO();
        $medicoVO->setId($cod);
        $sql = "delete from medico where id = ?;";
        $puente = new conectar();
        $smtp = $puente->stmp($sql);
        $smtp->bind_param("i",$medicoVO->getId());
        return $puente->ExecuteQuery($smtp);
        /*
          $arreglo = $this->lectura();
          unlink("../../class/BD/pacienteBD.cvs");
          $fp = fopen("../../class/BD/pacienteBD.cvs", "a");
          $estado = "no";
          for ($i = 0; $i < sizeof($arreglo); $i++) {
          $pacienteVO = $arreglo[$i];
          if ($pacienteVO->getCedula() != $cc) {
          fputs($fp, $pacienteVO->linea2());
          } else {
          $estado = "si";
          }
          }
          fclose($fp);
          return $estado;

         */
    }
    public function lecturaJson() {
        $fp = fopen("../../class/BD/medicoBD.cvs", "r");
        $arregloMed = array();
        while (!feof($fp)) {
            $linea = fgets($fp);
            if ($linea != "") {
                $arreglo = explode(";", $linea);
                $MedicoVO = new stdClass();
                $MedicoVO->id = $arreglo[0];
                $MedicoVO->cc = $arreglo[1];
                $MedicoVO->nom = $arreglo[2];
                $MedicoVO->ape = $arreglo[3];
                $MedicoVO->prof = $arreglo[4];
                $MedicoVO->email = $arreglo[5];
                $arregloMed[] = $MedicoVO;
            }
        }
        fclose($fp);
        return $arregloMed;
    }

    private function getId() {
        $edificio = $this->lectura();
        $limite = sizeof($edificio);
        for ($i = 0; $i < $limite; $i++) {
            $medicoVO = $edificio[$i];
            if ($medicoVO->getId() > $this->idAuto) {
                $this->idAuto = $medicoVO->getId();
            }
        }
        return ($this->idAuto + 1);
    }

    private function validarCc($medicoVa) {
        $edificio = $this->lectura();
        $limite = sizeof($edificio);
        for ($i = 0; $i < $limite; $i++) {
            $medicoVO = $edificio[$i];
            if ($medicoVO->getCedula() == $medicoVa->getCedula()) {
                return true;
            }
        }
        return false;
    }

}
