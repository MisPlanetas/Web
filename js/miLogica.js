function ajax(donde, que, hacer) {
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


function P_mercurio() {
    let donde = "planetas/mercurio/indexMrc.php";
    let que = "";
    let hacer = function (data) {
        $("#aquiVaTodo").html(data);
    };
    ajax(donde, que, hacer);
}

function traerFotosMrc() {
    let donde = "planetas/mercurio/fotosMrc.php";
    let que = "";
    let hacer = function (data) {
        $("#aqui_van_las_fotos").html(data);
        $(document).ready(function () {
            $('.slider').bxSlider({
                mode: 'fade',
                captions: true,
                slideWidth: 600
            });
        });
    };
    ajax(donde, que, hacer);
}

function P_venus() {
    let donde = "planetas/venus/indexV.php";
    let que = "";
    let hacer = function (data) {
        $("#aquiVaTodo").html(data);
    };
    ajax(donde, que, hacer);
}

function traerFotosV() {
    let donde = "planetas/venus/fotosV.php";
    let que = "";
    let hacer = function (data) {
        $("#aqui_van_las_fotos").html(data);
        $(document).ready(function () {
            $('.slider').bxSlider({
                mode: 'fade',
                captions: true,
                slideWidth: 600
            });
        });
    };
    ajax(donde, que, hacer);
}

function P_tierra() {
    let donde = "planetas/tierra/indexT.php";
    let que = "";
    let hacer = function (data) {
        $("#aquiVaTodo").html(data);
    };
    ajax(donde, que, hacer);
}

function traerFotos() {
    let donde = "planetas/tierra/fotosT.php";
    let que = "";
    let hacer = function (data) {
        $("#aqui_van_las_fotos").html(data);
        $(document).ready(function () {
            $('.slider').bxSlider({
                mode: 'fade',
                captions: true,
                slideWidth: 600
            });
        });
    };
    ajax(donde, que, hacer);
}

function P_marte() {
    let donde = "planetas/marte/indexMar.php";
    let que = "";
    let hacer = function (data) {
        $("#aquiVaTodo").html(data);
    };
    ajax(donde, que, hacer);
}

function traerFotosMar() {
    let donde = "planetas/marte/fotosMar.php";
    let que = "";
    let hacer = function (data) {
        $("#aqui_van_las_fotos").html(data);
        $(document).ready(function () {
            $('.slider').bxSlider({
                mode: 'fade',
                captions: true,
                slideWidth: 600
            });
        });
    };
    ajax(donde, que, hacer);
}

function P_ceres() {
    let donde = "planetas/ceres/indexCr.php";
    let que = "";
    let hacer = function (data) {
        $("#aquiVaTodo").html(data);
    };
    ajax(donde, que, hacer);
}

function traerFotosCr() {
    let donde = "planetas/ceres/fotosCr.php";
    let que = "";
    let hacer = function (data) {
        $("#aqui_van_las_fotos").html(data);
        $(document).ready(function () {
            $('.slider').bxSlider({
                mode: 'fade',
                captions: true,
                slideWidth: 600
            });
        });
    };
    ajax(donde, que, hacer);
}

function P_jupiter() {
    let donde = "planetas/jupiter/indexJp.php";
    let que = "";
    let hacer = function (data) {
        $("#aquiVaTodo").html(data);
    };
    ajax(donde, que, hacer);
}

function traerFotosJp() {
    let donde = "planetas/jupiter/fotosJp.php";
    let que = "";
    let hacer = function (data) {
        $("#aqui_van_las_fotos").html(data);
        $(document).ready(function () {
            $('.slider').bxSlider({
                mode: 'fade',
                captions: true,
                slideWidth: 600
            });
        });
    };
    ajax(donde, que, hacer);
}

function P_saturno() {
    let donde = "planetas/saturno/indexSat.php";
    let que = "";
    let hacer = function (data) {
        $("#aquiVaTodo").html(data);
    };
    ajax(donde, que, hacer);
}

function traerFotosSat() {
    let donde = "planetas/saturno/fotosSat.php";
    let que = "";
    let hacer = function (data) {
        $("#aqui_van_las_fotos").html(data);
        $(document).ready(function () {
            $('.slider').bxSlider({
                mode: 'fade',
                captions: true,
                slideWidth: 600
            });
        });
    };
    ajax(donde, que, hacer);
}

function P_urano() {
    let donde = "planetas/urano/indexUr.php";
    let que = "";
    let hacer = function (data) {
        $("#aquiVaTodo").html(data);
    };
    ajax(donde, que, hacer);
}

function traerFotosUr() {
    let donde = "planetas/urano/fotosUr.php";
    let que = "";
    let hacer = function (data) {
        $("#aqui_van_las_fotos").html(data);
        $(document).ready(function () {
            $('.slider').bxSlider({
                mode: 'fade',
                captions: true,
                slideWidth: 600
            });
        });
    };
    ajax(donde, que, hacer);
}

function P_neptuno() {
    let donde = "planetas/neptuno/indexNp.php";
    let que = "";
    let hacer = function (data) {
        $("#aquiVaTodo").html(data);
    };
    ajax(donde, que, hacer);
}

function traerFotosNp() {
    let donde = "planetas/neptuno/fotosNp.php";
    let que = "";
    let hacer = function (data) {
        $("#aqui_van_las_fotos").html(data);
        $(document).ready(function () {
            $('.slider').bxSlider({
                mode: 'fade',
                captions: true,
                slideWidth: 600
            });
        });
    };
    ajax(donde, que, hacer);
}

function P_pluton() {
    let donde = "planetas/pluton/indexPl.php";
    let que = "";
    let hacer = function (data) {
        $("#aquiVaTodo").html(data);
    };
    ajax(donde, que, hacer);
}

function traerFotosPl() {
    let donde = "planetas/pluton/fotosPl.php";
    let que = "";
    let hacer = function (data) {
        $("#aqui_van_las_fotos").html(data);
        $(document).ready(function () {
            $('.slider').bxSlider({
                mode: 'fade',
                captions: true,
                slideWidth: 600
            });
        });
    };
    ajax(donde, que, hacer);
}

function P_caronte() {
    let donde = "planetas/caronte/indexCar.php";
    let que = "";
    let hacer = function (data) {
        $("#aquiVaTodo").html(data);
    };
    ajax(donde, que, hacer);
}

function traerFotosCar() {
    let donde = "planetas/caronte/fotosCar.php";
    let que = "";
    let hacer = function (data) {
        $("#aqui_van_las_fotos").html(data);
        $(document).ready(function () {
            $('.slider').bxSlider({
                mode: 'fade',
                captions: true,
                slideWidth: 600
            });
        });
    };
    ajax(donde, que, hacer);
}

function P_ub313() {
    let donde = "planetas/ub313/indexUb313.php";
    let que = "";
    let hacer = function (data) {
        $("#aquiVaTodo").html(data);
    };
    ajax(donde, que, hacer);
}

function traerFotosUb313() {
    let donde = "planetas/ub313/fotosUb313.php";
    let que = "";
    let hacer = function (data) {
        $("#aqui_van_las_fotos").html(data);
        $(document).ready(function () {
            $('.slider').bxSlider({
                mode: 'fade',
                captions: true,
                slideWidth: 600
            });
        });
    };
    ajax(donde, que, hacer);
}