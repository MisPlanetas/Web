<?php

if ($_POST) {
    require '../../class/VO/medicaVO.php';
    require '../../class/DAO/medicaDAO.php';
    $medicaDAO = new medicaDAO();
    
    echo $medicaDAO->eliminar($_POST["cc"]);
}
