   <legend id="tex_pac" class="text-warning"align="center" >Contactanos</legend>
   <form      id="forRedMedi" name="forRedMedi" autocomplete="off" action="enviar.php" method="POST">
   

    <div id="caja3">
        <label class="col-form-label" for="inputDefault">Ingrese nombre</label><br>
        <input style="width:70%" type="text" id="email" name="nombre" value="" placeholder="Ingrese Email" required>
     
    </div>
      
      
    <div id="caja3"class="form-group">
  <label    align="left"class="col-form-label" for="inputDefault">Ingrse su correo</label><br>
  <input style="width:70%" type="text" id="email" name="correo" value="" placeholder="Ingrese Email" required>
</div>

    <div id="caja3" class="form-group">
        <label for="exampleTextarea">Example textarea</label> <br>
      <textarea style="width:70%" type="text" name="mensaje" value="" placeholder="Ingrese tu comentario..." required></textarea>
    </div>

  
    <button type="submit" class="btn btn-primary">Enviar</button>
    </form>