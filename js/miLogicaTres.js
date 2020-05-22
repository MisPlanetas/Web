$(document).ready(function () {
    let conMed = 1;
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

    function MeAsgPolForCreMed() {
        $("#forRegMed").validate({
            rules: {
                ccM: {
                    required: true,
                    digits: true
                },
                nomM: {
                    required: true,
                    rangelength: [3, 20]
                },
                apeM: {
                    required: true,
                    rangelength: [3, 20]
                },
                profM: {
                    required: true,
                    rangelength: [3, 20]
                },
                email: {
                    required: true,
                    email: true
                },
                emailC: {
                    required: true,
                    email: true
                }

            },
            messages: {
                ccM: {
                    digits: "<b>Solo Números</b>"
                }
            },
            submitHandler: function () {

                //if ($("#email").val() === $("#emailcf").val()) {
                    /*if ($("#cod").val() == "") {
                     alert("Agregando: " + $("#cod").val());
                     let medico = {
                     id: conMed,
                     cc: $("#ccM").val(),
                     nom: $("#nomM").val(),
                     ape: $("#apeM").val(),
                     prof: $("#profM").val(),
                     email: $("#email").val(),
                     type: "med"
                     };
                     
                     if (ValidadCcMed(medico.ccM)) {
                     localStorage.setItem("med" + conMed, JSON.stringify(medico));
                     $("#limpiarM").trigger("click");
                     conMed++;
                     } else {
                     alert("El medico con la cedula " + medico.ccM + " ya existe");
                     }
                     } else {
                     let medico = {
                     id: $("#cod").val(),
                     cc: $("#ccM").val(),
                     nom: $("#nomM").val(),
                     ape: $("#apeM").val(),
                     prof: $("#profM").val(),
                     email: $("#email").val(),
                     type: "med"
                     };
                     localStorage.setItem("med" + $("#cod").val(), JSON.stringify(medico));
                     $("#limpiarM").trigger("click");
                     alert("El médico " + medico.nom + " fué modificado");
                     $("#ListaMedicos").trigger("click");
                     }*/
                    //alerta("Procesando", "Se está realizando la conexión con el servidor <br> PleaseWait ..." + espera);
                    alerta("Proceso", button = "Datos Registrados");
                    let donde = "controller/medico/agregarMed.php";
                    let que = $("#forRegMed").serialize();
                    let hacer = function (data) {
                        console.table(data);
                        let dato = JSON.parse(data);
                        console.log(data);
                        if (dato.success == "OK") {
                            alerta("Resultado", "Datos Registrados");
                        } else {
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
    function ValidadCcMed(ccM) {
        let data = localStorage;
        let limite = data.length;
        for (let i = 0; i < limite; i++) {
            let key = data.key(i);
            try {
                let medico = JSON.parse(data.getItem(key));
                if (medico.type == "med") {
                    if (medico.cc == cc) {
                        return false;
                    }
                }
            } catch (e) {

            }
        }
        return true;
    }


    $("#gesMed").click(function () {
//alert("Gestion");
        let donde = "view/medicos/forCrearMed.php";
        let que = "acceso=true";
        let hacer = function (data) {
            $("#aquiVaTodo").html(data);
            MeAsgPolForCreMed();

            $("#ListaMedicos").click(function () {
                $("#AquiVaLaLista").html("Se está procesando su solicitud");
                /*let limit = localStorage.length;
                 for (let i = 0; i < limit; i++) {
                 let key = localStorage.key(i);
                 let objeto = localStorage.getItem(key);
                 try {
                 objeto = JSON.parse(objeto);
                 if (objeto.type == "med") {
                 $("#AquiVaLaLista").append("<div class='cajita2'><label class='label2'>CC = " + objeto.cc + "  -  Nombre = " + objeto.nom + " -  Profesión = " + objeto.prof + " - Email:" + objeto.email + "</label><div><button id='btnE" + objeto.cc + "' class='btnEli'>Eliminar</button><button id='btnM" + objeto.cc + "' class='btnMod'>Modificar</button></div></div>");
                 $("#btnE" + objeto.cc).click(function () {
                 let medico = objeto;
                 if (confirm("Está seguro de eliminar el medico")) {
                 if (EliMed(medico.id)) {
                 alert("Proceso ejecutado, se eliminó al médico " + medico.nom);
                 $(this).parent().parent().remove();
                 } else {
                 alert("Intente de nuevo, si el error persiste comuniquese con el administrador");
                 }
                 } else {
                 alert("Proceso de eliminacion cancelado");
                 }
                 });
                 $("#btnM" + objeto.cc).click(function () {
                 let medico = objeto;
                 $("#cod").val(medico.id);
                 $("#ccM").val(medico.cc);
                 $("#nomM").val(medico.nom);
                 $("#apeM").val(medico.ape);
                 $("#profM").val(medico.prof);
                 $("#email").val(medico.email);
                 $("#emailcf").val(medico.email);
                 });
                 }
                 } catch (e) {
                 
                 }
                 
                 }*/
                let donde = "controller/medico/listaMed.php";
                let que = "Acceso=true";
                let hacer = function (data) {
                    $("#AquiVaLaLista").html();
                    let dato = JSON.parse(data);
                    dato = dato.results;
                    for (let i = 0; i < dato.length; i++) {
                        let objeto = dato[i];
                        console.log(objeto);
                        $("#AquiVaLaLista").append("<div class='cajita2'><label class='label2'>CC = " + objeto.cc + "  -  Nombre = " + objeto.nombre + "</label><div><button id='btnE" + objeto.id + "' class='btnEli'>Eliminar</button><button id='btnM" + objeto.cc + "' class='btnMod'>Modificar</button></div></div>");
                    }
                    $(".btnEli").click(function () {
                        alerta("Proceso", button = "Se elimino el usuario");
                        let elID = $(this).attr('id').replace("btnE", "");
                        ConfirmeDialog("Confirme la eliminaciòn del usuario", function () {
                            let donde = "controller/medico/eliminarMed.php";
                            let quellevar = "cod=" + elID

                            let hacer = function (data) {
                                console.log(data);
                                let dato = JSON.parse(data);
                                dato = dato.results;
                                if (dato.success == "OK") {
                                    $("#btnE" + elID).parent().parent().remove();
                                }
                            };
                            MiAjax(donde, que, hacer);
                        });
                    });
                };
                MiAjax(donde, que, hacer);
            });
        };
        MiAjax(donde, que, hacer);
    });

    function actuContaMed() {
        let data = localStorage;
        let limit = data.length;
        let mayor = 0;
        for (let i = 0; i < limit; i++) {
            let key = data.key(i);
            let objetoM = data.getItem(key);
            try {
                objeto = JSON.parse(objetoM);
                if (objetoM.type == "med") {
                    if (objetoM.id > mayor) {
                        mayor = objetoM.id;
                    }
                }
            } catch (e) {

            }
        }
        conPaci = mayor + 1;
        console.log(conMed);
        console.table(localStorage);
    }

    /**
     * Metodo que permite validar la existencia de un paciente
     * @param {type} cc parametros a validar
     * @returns {Boolean} parametros a retornar
     */
    function EliMed(id) {
        let data = localStorage;
        let limite = data.length;
        for (let i = 0; i < limite; i++) {
            let key = data.key(i);
            try {
                let medico = JSON.parse(data.getItem(key));
                if (medico.type == "med") {
                    if (medico.id == id) {
                        localStorage.removeItem(key);
                        return true;
                    }
                }
            } catch (e) {

            }
        }
        return false;
    }

    actuContaMed();

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




