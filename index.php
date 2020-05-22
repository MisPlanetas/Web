
<html>
    <head>
        <title>Planetas</title>
        <meta charset="UTF-8"> 
        <link href="css/bootstrap.css" rel="stylesheet" type="text/css"/>
        <link href="css/custom.min.css" rel="stylesheet" type="text/css"/>
        <script src="js/jquery.min.js" type="text/javascript"></script>
        <script src="js/popper.min.js" type="text/javascript"></script>
        <script src="js/bootstrap.min.js" type="text/javascript"></script>
        <link href="css/miEstilo.css" rel="stylesheet" type="text/css"/>        
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.css">               
        <script src="js/jquery-3.4.1.min.js" type="text/javascript"></script>
        <link href="css/jquery-ui.css" rel="stylesheet" type="text/css"/>
        <script src="js/jquery-ui.js" type="text/javascript"></script>        
        <script src="js/miLogica.js" type="text/javascript"></script>
        <script src="js/miLogicaDos.js" type="text/javascript"></script>
        <script src="js/miLogicaTres.js" type="text/javascript"></script>
        <script src="js/miLogicaCuatro.js" type="text/javascript"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.min.js"></script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.1/jquery.validate.js"></script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.1/additional-methods.js"></script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.1/localization/messages_es.js"></script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.css"></script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.js"></script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.js"></script>
    </head>
    <body>

        <nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
            <div class="container">
                <a class="navbar-brand"   <a href='http://localhost/Planetas/'>Inicio</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>



                    <div class="collapse navbar-collapse" id="navbarColor02">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false" >Planetas</a>
                                <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 40px, 0px);">
                                    <a class="dropdown-item" href="#" onclick="P_mercurio()">Mercurio</a>
                                    <a class="dropdown-item" href="#" onclick="P_venus()">Venus</a>
                                    <a class="dropdown-item" href="#" onclick="P_tierra()">Tierra</a>
                                    <a class="dropdown-item" href="#" onclick="P_marte()">Marte</a>
                                    <a class="dropdown-item" href="#" onclick="P_ceres()">Ceres</a>
                                    <a class="dropdown-item" href="#" onclick="P_jupiter()">Jupiter</a>
                                    <a class="dropdown-item" href="#" onclick="P_saturno()">Saturno</a>
                                    <a class="dropdown-item" href="#" onclick="P_urano()">Urano</a>
                                    <a class="dropdown-item" href="#" onclick="P_neptuno()">Neptuno</a>
                                    <a class="dropdown-item" href="#" onclick="P_pluton()">Pluton</a>
                                    <a class="dropdown-item" href="#" onclick="P_caronte()">Caronte</a>
                                    <a class="dropdown-item" href="#" onclick="P_ub313()">2003 UB313</a>

                                </div>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#"id="gesPer">Contactanos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#" id="gesMed">Gestionar Medico</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"id="gesMedica">Medicamentos</a>
                            </li>
                        </ul>

                        <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="text" placeholder="Search">
                            <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                        </form>

                    </div>

            </div>

        </nav>

        <div   class="container">
               <div class="jumbotron" id="aquiVaTodo">

                <h1  id="tex_ini">Desarrollo Web!</h1>
                <p class="lead">Paul Esteban Duarte Matallana</p>
                <hr class="my-4">
                <p>Trabajo con Boostrap</p>
                <p class="lead">
                    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </div>


            <div style="display: none">
                <div id="dialog" title="">
                    <p id="MenAlerta"></p>
                </div>
            </div>

            <div id="dialog-confirm" title="Solicitud de confirmación">
                <p id="textoConf"></p>
            </div>



        </p>
    </div>
</body>
</html>
