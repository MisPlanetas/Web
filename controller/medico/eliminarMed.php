<?php

if ($_POST) {
    require '../../class/VO/medicoVO.php';
    require '../../class/DAO/medicoDAO.php';
    require '../../class/BD/conectar.php';
    $medicoDAO = new medicoDAO();
    
       echo json_encode($medicoDAO->eliminar($_POST["cod"]));
}
