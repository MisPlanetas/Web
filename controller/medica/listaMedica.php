<?php
if($_POST){
    require '../../class/DAO/medicaDAO.php';
    require '../../class/VO/medicaVO.php';
    
    $medicaDAO = new medicaDAO();
    $edificio = $medicaDAO->lecturaJson();
    echo json_encode($edificio);
    
}else{
    header("location:../../");
}