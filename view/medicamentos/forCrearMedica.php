 
<form      id="forRedMedi" name="forRedMedi" autocomplete="off">
    <legend id="tex_pac" class="text-warning"align="center" >Gestionar Medicamentos</legend>
    <input type="hidden" id="cod" name="cod">
  
    <div id="caja3" class="text-warning">
        <label id="cedulat"class="col-form-label" for="inputDefault" >Ingrese Valor Medicamento</label><br>
        <input  style="width:70%" type="text" id="cc" name="cc" value="" placeholder="ingrese Valor" id="inputDefault">
    </div>
        
    <div id="caja3" class="text-warning">
        <label class="col-form-label" for="inputDefault">Ingrese Nombre Del Medicamento</label><br>
        <input style="width:70%"type="text" id="nom" name="nom" value="" placeholder="ingrese Nombre" id="inputDefault">
    </div>
    <div id="caja3" class="text-warning"> 
        <label  class="col-form-label" for="inputDefault">Ingrese Tipo</label><br>
        <input  style="width:70%"type="text" id="ape" name="ape" value="" placeholder="ingrese Apellido" id="inputDefault">
    <br>
        <br>    
    <div align="center">
        <button class="btn btn-warning" type="submit" >Registrar</button>
        <button class="btn btn-warning" type="reset" id="limpiar">Limpiar</button>
        <h1 id="tex-list">Lista</h1>
        <button class="btn btn-warning" id="ListaMedica">Lista Medicamentos</button>
        <div id="AquiVaLaLista"></div>
    </div>
</form>