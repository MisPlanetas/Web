 <?php
if($_POST){
    require '../../class/DAO/pacienteDAO.php';
    require '../../class/VO/pacienteVO.php';
    require '../../class/BD/conectar.php';
    $pacienteDAO = new pacienteDAO();
    echo json_encode($pacienteDAO->Consulta($_POST["cod"]));

}else{
    header("location:../../");
}

