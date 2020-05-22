<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of DriverMySQL
 *
 * @author Luis Alvarez
 */
class conectar {

    //put your code here
    /**
     * Variable que establecerar el puente de
     * conexión entre PHP y MYSQL
     * @var type Puente de Enlaze
     */
    private $conn;

    /**
     * Establece seguridad en las sentencias.
     * sentencias preparadas
     * @var type 
     */
    private $stmp;

    function __construct() {
        $host = "localhost";
        $user = "root";
        $clave = "";
        $bd = "planetas";
        $this->conn = new mysqli($host, $user, $clave, $bd);
        if ($this->conn->connect_errno) {
            echo "Hay un error en la creación del Puente";
            exit();
        } else {
            $this->conn->query("SET NAME 'utf8'");
            mysqli_set_charset($this->conn, 'utf8');
            return 'ok';
        }
    }

    /**
     * Metodo que crea la conexción de enlace con el servidor
     * @param type $sql la sentencia de coneción execuet o query
     * @return type
     */
    public function stmp($sql) {
        $this->stmp = $this->conn->prepare($sql);
        if ($this->stmp === false) {
            return false;
        }
        return $this->stmp;
    }

    /**
     * Metod que cierra el puente
     */
    public function cerrar() {
        $this->stmp->close();
        $this->conn->close();
    }

    /**
     * Metodo que se debe ejercutar para retornar una lista de datos desde el servidor
     * de bases de datos a la VIEW
     * @param type $stmp
     */
    function listaData($stmp) {
        $respuesta = array();
        $respuesta["info"] = array();
        $respuesta["info"]["version"] = "0.1";
        $respuesta["success"] = 'no';
        $this->stmp = $stmp;
        if ($this->stmp->execute()) {
            $data = $this->stmp->get_result();
            $respuesta["info"]["numero"] = $data->num_rows;
            $respuesta["results"] = array();
            while ($fila = $data->fetch_assoc()) {
                $respuesta["success"] = 'OK';
                $respuesta["results"][] = $fila;
            }
          //  $this->cerrar();
        } else {
            $respuesta["success"] = 'no';
        }
        //$this->cerrar();
        return $respuesta;
    }

    /**
     * Este metodo es para ejecutar el las 
     * sentencias de tipo :
     * Insert
     * Update
     * Delete
     * @param type $stmp
     * @return string
     */
    function ExecuteQuery($stmp) {
        $this->stmp = $stmp;
        $respuesta = array();
        $respuesta["info"] = array();
        $respuesta["info"]["version"] = "0.1";
        if ($this->stmp->execute()) {
            $respuesta["success"] = 'OK';
        } else {
            $respuesta["success"] = 'no';
        }
        $this->cerrar();
        return $respuesta;
    }

}
