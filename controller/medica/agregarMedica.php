<?php

if ($_POST) {
    //sleep(5);
    require '../../class/VO/medicaVO.php';
    require '../../class/DAO/medicaDAO.php';

    $medicaDAO = new medicaDAO();
    if ($medicaDAO->agregar($_POST["cc"], $_POST["nom"], $_POST["ape"], $_POST["eps"])) {
        echo 'SI';
    } else {
        echo 'NO';
    }
} else {
    header("location:../../");
}