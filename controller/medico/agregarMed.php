<?php

if ($_POST) {
    require '../../class/VO/medicoVO.php';
    require '../../class/DAO/medicoDAO.php';
    require '../../class/BD/conectar.php';
    $medicoDAO = new medicoDAO();
   echo json_encode($medicoDAO->agregar($_POST["ccM"], $_POST["nomM"], $_POST["apeM"], $_POST["profM"], $_POST["email"]));

} else {
    header("location:../../");
}

