<?php
if($_POST){
    require '../../class/DAO/medicoDAO.php';
    require '../../class/VO/medicoVO.php';
    require '../../class/BD/conectar.php';
    
   $medicoDAO = new medicoDAO();
    echo json_encode($medicoDAO->lectura());
    
}else{
    header("location:../../");
}