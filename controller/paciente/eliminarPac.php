<?php

if ($_POST) {
    require '../../class/VO/pacienteVO.php';
    require '../../class/DAO/pacienteDAO.php';
    require '../../class/BD/conectar.php';
    $pacienteDAO = new pacienteDAO();
    
    echo json_encode($pacienteDAO->eliminar($_POST["cod"]));
}
