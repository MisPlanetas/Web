$(document).ready(function () {
    let conMedi = 1;
    function MiAjax(donde, que, hacer) {
        $.ajax({
            url: donde,
            data: que,
            type: 'POST',
            dataType: 'html',
            success: function (data) {
                hacer(data);
            },
            error: function (xhr, status) {
                alert('Disculpe, existió un problema');
            }
        });
    }

    function MeAsgPolForCreMedi() {
        $("#forRedMedi").validate({
            rules: {
                cc: {
                    required: true,
                    digits: true
                },
                nom: {
                    required: true,
                    rangelength: [3, 20]
                },
                ape: {
                    required: true,
                    rangelength: [3, 20]
                },
                 eps: {
                    required: true,
                    rangelength: [3, 20]
                }
            },
            messages: {
                cc: {
                    digits: "<b>Solo Números</b>"
                }
            },
            submitHandler: function () {
                /*
                 if ($("#cod").val() == "") {
                 alert("Agregando: " + $("#cod").val());
                 let paciente = {
                 id: conPaci,
                 cc: $("#cc").val(),
                 nom: $("#nom").val(),
                 ape: $("#ape").val(),
                 type: "pac"
                 };
                 
                 if (ValidadCcPac(paciente.cc)) {
                 localStorage.setItem("pac" + conPaci, JSON.stringify(paciente));
                 $("#limpiar").trigger("click");
                 conPaci++;
                 } else {
                 alert("El paciente con la cedula " + paciente.cc + " ya existe");
                 }
                 } else {
                 let paciente = {
                 id: $("#cod").val(),
                 cc: $("#cc").val(),
                 nom: $("#nom").val(),
                 ape: $("#ape").val(),
                 type: "pac"
                 };
                 localStorage.setItem("pac" + $("#cod").val(), JSON.stringify(paciente));
                 $("#limpiar").trigger("click");
                 alert("El paciente " + paciente.nom + " fué modificado");
                 $("#ListaPacientes").trigger("click");
                 }
                 */
                //alerta("Procesando","Se está realizando la conexión con el servidor <br> PleaseWait ..." + espera);
                let donde = "controller/medica/agregarMedica.php";
                let que = $("#forRedMedi").serialize();
                let hacer = function (data) {
                    console.log(data);
                    //alert(data);
                    if (data == "SI") {
                        alerta("Resultado", "Datos Registrados");
                        //alert("Datos Registrados");
                    } else {
                        //alert("Error con el servidor");
                        alerta("Resultado", "Error con el servidor");
                    }
                };
                MiAjax(donde, que, hacer);
            }
        });
    }

    /**
     * Metodo que permite validar la existencia de un paciente
     * @param {type} cc parametros a validar
     * @returns {Boolean} parametros a retornar
     */
    function ValidadCcMedi(cc) {
        let data = localStorage;
        let limite = data.length;

        for (let i = 0; i < limite; i++) {
            let key = data.key(i);
            try {
                let medica = JSON.parse(data.getItem(key));
                if (medica.type == "medi") {
                    if (medica.cc == cc) {
                        return false;
                    }
                }
            } catch (e) {

            }
        }
        return true;
    }


    $("#gesMedica").click(function () {
   
        let donde = "view/medicamentos/forCrearMedica.php";
        let que = "acceso=true";
        let hacer = function (data) {
            $("#aquiVaTodo").html(data);
            MeAsgPolForCreMedi();

            $("#ListaMedica").click(function () {
                $("#AquiVaLaLista").html("Se está procesando su solicitud");
                /*let limit = localStorage.length;
                 for (let i = 0; i < limit; i++) {
                 let key = localStorage.key(i);
                 let objeto = localStorage.getItem(key);
                 try {
                 objeto = JSON.parse(objeto);
                 if (objeto.type == "pac") {
                 $("#AquiVaLaLista").append("<div class='cajita'><label>cc = " + objeto.cc + " Nombre = " + objeto.nom + "</label><div><button id='btnE" + objeto.cc + "' class='btnEli'>Eliminar</button><button id='btnM" + objeto.cc + "' class='btnMod'>Modificar</button></div></div>");
                 $("#btnE" + objeto.cc).click(function () {
                 let paciente = objeto;
                 if (confirm("Está seguro de eliminar el paciente")) {
                 if (EliPac(paciente.id)) {
                 alert("Proceso ejecutado, se eliminó al paciente " + paciente.nom);
                 $(this).parent().parent().remove();
                 } else {
                 alert("Intente de nuevo, si el error persiste comuniquese con el administrador");
                 }
                 } else {
                 alert("Proceso de eliminacion cancelado");
                 }
                 });
                 $("#btnM" + objeto.cc).click(function () {
                 let paciente = objeto;
                 $("#cod").val(paciente.id);
                 $("#cc").val(paciente.cc);
                 $("#nom").val(paciente.nom);
                 $("#ape").val(paciente.ape);
                 });
                 }
                 } catch (e) {
                 
                 }
                 
                 }
                 */
                let donde = "controller/medica/listaMedica.php";
                let que = "Acceso=true";
                let hacer = function (data) {
                    $("#AquiVaLaLista").html("");
                    let dato = JSON.parse(data);
                    for (let i = 0; i < dato.length; i++) {
                        let objeto = dato[i];
                        console.log(objeto);
                        $("#AquiVaLaLista").append("<div class='cajita'><label>cc = " + objeto.cc + " Nombre = " + objeto.nom + "</label><div><button id='btnE" + objeto.cc + "' class='btnEli'>Eliminar</button><button id='btnM" + objeto.cc + "' class='btnMod'>Modificar</button></div></div>");
                    }
                    $(".btnEli").click(function () {
                        let laCc = $(this).attr('id').replace("btnE","");
                        ConfirmeDialog("Confirme la eliminaciòn del usuario", function () {
                            let donde = "controller/medica/eliminarMedica.php";
                            let que = "cc="+laCc;
                            let hacer = function (data) {
                                if(data == "si"){
                                    alerta("Confirmación", "El paciente ha sido eliminado");
                                    $("#btnE"+laCc).parent().parent().remove();
                                }else{
                                    alerta("Error, no pudo ser eliminado el usuario");
                                }
                            };
                            MiAjax(donde,que,hacer);
                        });
                    });
                };
                MiAjax(donde, que, hacer);
            });
        };
        MiAjax(donde, que, hacer);
    });

    function actuContaMedi() {
        let data = localStorage;
        let limit = data.length;
        let mayor = 0;
        for (let i = 0; i < limit; i++) {
            let key = data.key(i);
            let objeto = data.getItem(key);
            try {
                objeto = JSON.parse(objeto);
                if (objeto.type == "medi") {
                    if (objeto.id > mayor) {
                        mayor = objeto.id;

                    }
                }
            } catch (e) {

            }
        }
        conMedi = mayor + 1;
        console.log(conMedi);
        console.table(localStorage);
    }

    /**
     * Metodo que permite validar la existencia de un paciente
     * @param {type} cc parametros a validar
     * @returns {Boolean} parametros a retornar
     */
    function EliMedi(id) {
        let data = localStorage;
        let limite = data.length;
        for (let i = 0; i < limite; i++) {
            let key = data.key(i);
            try {
                let medica = JSON.parse(data.getItem(key));
                if (medica.type == "medi") {
                    if (medica.id == id) {
                        localStorage.removeItem(key);
                        return true;
                    }
                }
            } catch (e) {

            }
        }
        return false;
    }

    actuContaMedi();

    let espera = '<img src="img/loading.gif" alt="Espera" width="30px"/>';
    function alerta(titulo, textoAlerta) {
        $("#dialog").attr("title", titulo);
        $("#MenAlerta").html(textoAlerta);
        $("#dialog").dialog();
    }

    function ConfirmeDialog(textoMen, ejecutar) {

        $("#textoConf").html(textoMen);
        $("#dialog-confirm").dialog({
            resizable: false,
            height: "auto",
            width: 400,
            modal: true,
            buttons: {
                "Confirmar": function () {
                    ejecutar();
                    $(this).dialog("close");
                },
                Cancel: function () {
                    $(this).dialog("close");
                }
            }
        });
    }
});




$(document).ready(function () {
    let conMedi = 1;
    function MiAjax(donde, que, hacer) {
        $.ajax({
            url: donde,
            data: que,
            type: 'POST',
            dataType: 'html',
            success: function (data) {
                hacer(data);
            },
            error: function (xhr, status) {
                alert('Disculpe, existió un problema');
            }
        });
    }

    function MeAsgPolForCrePac() {
        $("#forRedMedi").validate({
            rules: {
                cc: {
                    required: true,
                    digits: true
                },
                nom: {
                    required: true,
                    rangelength: [3, 20]
                },
                ape: {
                    required: true,
                    rangelength: [3, 20]
                }
            },
            messages: {
                cc: {
                    digits: "<b>Solo Números</b>"
                }
            },
            submitHandler: function () {
                /*
                 if ($("#cod").val() == "") {
                 alert("Agregando: " + $("#cod").val());
                 let paciente = {
                 id: conPaci,
                 cc: $("#cc").val(),
                 nom: $("#nom").val(),
                 ape: $("#ape").val(),
                 type: "pac"
                 };
                 
                 if (ValidadCcPac(paciente.cc)) {
                 localStorage.setItem("pac" + conPaci, JSON.stringify(paciente));
                 $("#limpiar").trigger("click");
                 conPaci++;
                 } else {
                 alert("El paciente con la cedula " + paciente.cc + " ya existe");
                 }
                 } else {
                 let paciente = {
                 id: $("#cod").val(),
                 cc: $("#cc").val(),
                 nom: $("#nom").val(),
                 ape: $("#ape").val(),
                 type: "pac"
                 };
                 localStorage.setItem("pac" + $("#cod").val(), JSON.stringify(paciente));
                 $("#limpiar").trigger("click");
                 alert("El paciente " + paciente.nom + " fué modificado");
                 $("#ListaPacientes").trigger("click");
                 }
                 */
                //alerta("Procesando","Se está realizando la conexión con el servidor <br> PleaseWait ..." + espera);
                let donde = "controller/medica/agregarMedica.php";
                let que = $("#forRedMedi").serialize();
                let hacer = function (data) {
                    console.log(data);
                    //alert(data);
                    if (data == "SI") {
                        alerta("Resultado", "Datos Registrados");
                        //alert("Datos Registrados");
                    } else {
                        //alert("Error con el servidor");
                        alerta("Resultado", "Error con el servidor");
                    }
                };
                MiAjax(donde, que, hacer);
            }
        });
    }

    /**
     * Metodo que permite validar la existencia de un paciente
     * @param {type} cc parametros a validar
     * @returns {Boolean} parametros a retornar
     */
    function ValidadCcMedi(cc) {
        let data = localStorage;
        let limite = data.length;

        for (let i = 0; i < limite; i++) {
            let key = data.key(i);
            try {
                let medica = JSON.parse(data.getItem(key));
                if (medica.type == "medi") {
                    if (medica.cc == cc) {
                        return false;
                    }
                }
            } catch (e) {

            }
        }
        return true;
    }


    $("#gesMedica").click(function () {
        
        let donde = "view/medicamentos/forCrearMedica.php";
        let que = "acceso=true";
        let hacer = function (data) {
            $("#aquiVaTodo").html(data);
            MeAsgPolForCrePac();

            $("#ListaMedica").click(function () {
                $("#AquiVaLaLista").html("Se está procesando su solicitud");
                /*let limit = localStorage.length;
                 for (let i = 0; i < limit; i++) {
                 let key = localStorage.key(i);
                 let objeto = localStorage.getItem(key);
                 try {
                 objeto = JSON.parse(objeto);
                 if (objeto.type == "pac") {
                 $("#AquiVaLaLista").append("<div class='cajita'><label>cc = " + objeto.cc + " Nombre = " + objeto.nom + "</label><div><button id='btnE" + objeto.cc + "' class='btnEli'>Eliminar</button><button id='btnM" + objeto.cc + "' class='btnMod'>Modificar</button></div></div>");
                 $("#btnE" + objeto.cc).click(function () {
                 let paciente = objeto;
                 if (confirm("Está seguro de eliminar el paciente")) {
                 if (EliPac(paciente.id)) {
                 alert("Proceso ejecutado, se eliminó al paciente " + paciente.nom);
                 $(this).parent().parent().remove();
                 } else {
                 alert("Intente de nuevo, si el error persiste comuniquese con el administrador");
                 }
                 } else {
                 alert("Proceso de eliminacion cancelado");
                 }
                 });
                 $("#btnM" + objeto.cc).click(function () {
                 let paciente = objeto;
                 $("#cod").val(paciente.id);
                 $("#cc").val(paciente.cc);
                 $("#nom").val(paciente.nom);
                 $("#ape").val(paciente.ape);
                 });
                 }
                 } catch (e) {
                 
                 }
                 
                 }
                 */
                let donde = "controller/medica/listaMedica.php";
                let que = "Acceso=true";
                let hacer = function (data) {
                    $("#AquiVaLaLista").html("");
                    let dato = JSON.parse(data);
                    for (let i = 0; i < dato.length; i++) {
                        let objeto = dato[i];
                        console.log(objeto);
                        $("#AquiVaLaLista").append("<div class='cajita'><label>cc = " + objeto.cc + " Nombre = " + objeto.nom + "</label><div><button id='btnE" + objeto.cc + "' class='btnEli'>Eliminar</button><button id='btnM" + objeto.cc + "' class='btnMod'>Modificar</button></div></div>");
                    }
                    $(".btnEli").click(function () {
                        let laCc = $(this).attr('id').replace("btnE","");
                        ConfirmeDialog("Confirme la eliminaciòn del usuario", function () {
                            let donde = "controller/medica/eliminarMedica.php";
                            let que = "cc="+laCc;
                            let hacer = function (data) {
                                if(data == "si"){
                                    alerta("Confirmación", "El paciente ha sido eliminado");
                                    $("#btnE"+laCc).parent().parent().remove();
                                }else{
                                    alerta("Error, no pudo ser eliminado el usuario");
                                }
                            };
                            MiAjax(donde,que,hacer);
                        });
                    });
                };
                MiAjax(donde, que, hacer);
            });
        };
        MiAjax(donde, que, hacer);
    });

    function actuContaMedi() {
        let data = localStorage;
        let limit = data.length;
        let mayor = 0;
        for (let i = 0; i < limit; i++) {
            let key = data.key(i);
            let objeto = data.getItem(key);
            try {
                objeto = JSON.parse(objeto);
                if (objeto.type == "medi") {
                    if (objeto.id > mayor) {
                        mayor = objeto.id;

                    }
                }
            } catch (e) {

            }
        }
        conMedi = mayor + 1;
        console.log(conMedi);
        console.table(localStorage);
    }

    /**
     * Metodo que permite validar la existencia de un paciente
     * @param {type} cc parametros a validar
     * @returns {Boolean} parametros a retornar
     */
    function EliMedi(id) {
        let data = localStorage;
        let limite = data.length;
        for (let i = 0; i < limite; i++) {
            let key = data.key(i);
            try {
                let medica = JSON.parse(data.getItem(key));
                if (medica.type == "medi") {
                    if (medica.id == id) {
                        localStorage.removeItem(key);
                        return true;
                    }
                }
            } catch (e) {

            }
        }
        return false;
    }

    actuContaMedi();

    let espera = '<img src="img/loading.gif" alt="Espera" width="30px"/>';
    function alerta(titulo, textoAlerta) {
        $("#dialog").attr("title", titulo);
        $("#MenAlerta").html(textoAlerta);
        $("#dialog").dialog();
    }

    function ConfirmeDialog(textoMen, ejecutar) {

        $("#textoConf").html(textoMen);
        $("#dialog-confirm").dialog({
            resizable: false,
            height: "auto",
            width: 400,
            modal: true,
            buttons: {
                "Confirmar": function () {
                    ejecutar();
                    $(this).dialog("close");
                },
                Cancel: function () {
                    $(this).dialog("close");
                }
            }
        });
    }
});




