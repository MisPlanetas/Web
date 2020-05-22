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
class pacienteDAO {

    //put your code here


    public function agregar($cedula, $nombre, $apellido, $eps) {
        $pacienteVO = new pacienteVO();
        $pacienteVO->setCedula($cedula);
        $pacienteVO->setNombre($nombre);
        $pacienteVO->setApellido($apellido);
        $pacienteVO->setEps($eps);
        //$pacienteVO->setId($this->getId());
        $BD = new conectar();
        $smpt = $BD->stmp("insert into paciente (cc,nom,ape,eps) values (?,?,?,?);");
        /*
         * S String texto
         * i numero entero
         * D numero flotantes con des
         * B block
         */
        $smpt->bind_param("ssss", $pacienteVO->getCedula(), $pacienteVO->getNombre(), $pacienteVO->getApellido(), $pacienteVO->getEps());
        return $BD->ExecuteQuery($smpt);
    }

    public function lectura() {

        $BD = new conectar();
        $stmp = $BD->stmp("Select * from paciente order by ape;");
        return $BD->listaData($stmp);
    }
    
        public function Consulta($cod) {
        $pacienteVO = new PacienteVO();
        $pacienteVO->setId($cod);
        $BD = new conectar();
        $stmp = $BD->stmp("Select * from paciente where id = ?;");
        $stmp->bind_param("i",$pacienteVO->getId());
        return $BD->listaData($stmp);
    }
    function eliminar($cod) {
        $pacienteVO = new PacienteVO();
        $pacienteVO->setId($cod);
        $sql = "delete from paciente where id = ?;";
        $puente = new conectar();
        $smtp = $puente->stmp($sql);
        $smtp->bind_param("i",$pacienteVO->getId());
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
        $fp = fopen("../../class/BD/pacienteBD.cvs", "r");
        $arregloPac = array();
        while (!feof($fp)) {
            $linea = fgets($fp);
            if ($linea != "") {
                $arreglo = explode(";", $linea);
                $pacienteVO = new stdClass();
                $pacienteVO->id = $arreglo[0];
                $pacienteVO->cc = $arreglo[1];
                $pacienteVO->nom = $arreglo[2];
                $pacienteVO->ape = $arreglo[3];
                $pacienteVO->eps = $arreglo[4];
                $arregloPac[] = $pacienteVO;
            }
        }
        fclose($fp);
        return $arregloPac;
    }

    private function getId() {
        $edificio = $this->lectura();
        $limite = sizeof($edificio);
        for ($i = 0; $i < $limite; $i++) {
            $pacienteVO = $edificio[$i];
            if ($pacienteVO->getId() > $this->idAuto) {
                $this->idAuto = $pacienteVO->getId();
            }
        }
        return ($this->idAuto + 1);
    }

    private function validarCc($pacienteVa) {
        $edificio = $this->lectura();
        $limite = sizeof($edificio);
        for ($i = 0; $i < $limite; $i++) {
            $pacienteVO = $edificio[$i];
            if ($pacienteVO->getCedula() == $pacienteVa->getCedula()) {
                return true;
            }
        }
        return false;
    }

}
