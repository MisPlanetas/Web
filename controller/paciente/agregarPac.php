<?php

if ($_POST) {
    //sleep(5);
    require '../../class/VO/pacienteVO.php';
    require '../../class/DAO/pacienteDAO.php';
    require '../../class/BD/conectar.php';
    $pacienteDAO = new pacienteDAO();
    echo json_encode($pacienteDAO->agregar($_POST["cc"], $_POST["nom"], $_POST["ape"], $_POST["eps"]));

} else {
    header("location:../../");
}