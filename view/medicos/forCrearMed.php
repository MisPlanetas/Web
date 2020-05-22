
<form  style="width:100%" id="forRegMed" name="forRegMed" autocomplete="off">
    <legend id="tex_pac"class="text-warning"align="center">Gestionar Médicos</legend>
    <input type="hidden" id="cod" name="cod">

    <div id="caja3" class="text-warning">
        <label  class="col-form-label" >Ingrese la cédula</label><br>
        <input style="width:70%" type="text" id="ccM" name="ccM" value="" placeholder="Ingrese CC" >
    </div>
    <div id="caja3" class="text-warning">
        <label class="col-form-label">Ingrese el nombre</label><br>
        <input style="width:70%" type="text" id="nomM" name="nomM" value="" placeholder="Ingrese Nombre" />
    </div>
    <div id="caja3"class="text-warning">
        <label class="col-form-label">Ingrese el apellido</label><br>
        <input style="width:70%" type="text" id="apeM" name="apeM" value="" placeholder="Ingrese Apellido" />
    </div>
    <div id="caja3" class="text-warning">
        <label class="col-form-label">Ingrese la profesión</label><br>
        <input style="width:70%" type="text" id="profM" name="profM" value="" placeholder="Ingrese Profesión" />
    </div>

    <div id="caja3" class="text-warning">
        <label class="col-form-label">Ingrese el correo electronico</label><br>
        <input style="width:70%" type="text" id="email" name="email" value="" placeholder="Ingrese Email" />
    </div>

    <div id="caja3" class="text-warning">
        <label class="col-form-label">Confirme el correo electronico</label><br>

        <input style="width:70%" type="text" id="emailcf" name="emailcf" value="" placeholder="Confirme Email" />
  
    <br>
    <br>


    <button class="btn btn-warning" type="submit">Registrar Médico</button>
    <button class="btn btn-warning" type="reset" id="limpiarM">Limpiar</button>



    <fieldset>
        <h1>Lista</h1>
        <button id="ListaMedicos" class="btn btn-warning">Lista Médicos</button>
        <div id="AquiVaLaLista" align="center"></div>
    </fieldset>
</form>  