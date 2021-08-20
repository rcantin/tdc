<!doctype html>
<!--<html lang="en" ng-app="myApp" ng-controller="MainCtrl">-->
<html lang="en" class="h-100">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link href="scss/theme.css" type="text/css" rel="Stylesheet" />
        <script defer src="https://use.fontawesome.com/releases/v5.0.8/js/all.js" integrity="sha384-SlE991lGASHoBfWbelyBPLsUlwY1GwNDJo3jSJO04KZ33K2bwfV9YBauFfnzvynJ" crossorigin="anonymous"></script>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
        <title>The Dream Centre | Waterdown</title>
        <script src="node_modules/jquery/dist/jquery.min.js"></script>
        <script src="node_modules/popper.js/dist/umd/popper.min.js"></script>
        <script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
        <script src="js/app.js"></script>
    </head>
    <body class="bg-light" data-spy="scroll" data-target="#navbar-scrollspy" data-offset="200" style="position: relative; overflow: auto;">

        <div class="navbar fixed-top bg-dark text-whte text-center">
            <img src="img/tdclogo-dancers.png" class="mx-auto" style="max-width: 280px;">
        </div>

        <nav class="navbar pt-0 navbar-expand-sm fixed-top navbar-dark bg-dark d-block text-center">
            <div class="navbar-brand">
                <div class="pb-2">
                    <img src="img/tdclogo-full.png" class="" style="width: 220px;">
                </div>
            </div>
            <button class="navbar-toggler mx-auto d-block d-sm-none" type="button" data-toggle="collapse" data-target="#navbarmenu" aria-controls="navbarmenu" aria-expanded="false" aria-label="Toggle navigation">
                <span class="">
                    <i class="fas fa-chevron-up fa-lg expandericon expanded"></i>
                    <i class="fas fa-chevron-down fa-lg expandericon collapsed"></i>
                </span>
            </button>
            <div class="collapse navbar-collapse" id="navbarmenu">
                <ul class="navbar-nav justify-content-center w-100 align-items-start d-block d-sm-flex">
                    <li class="nav-item"><a class="nav-link" href="index.php">Home</a></li>
                    <span class="p-2 text-light d-none d-md-inline-block">|</span>
                    <li class="nav-item"><a class="nav-link" href="programsschedules.php">Programs &amp; Schedules</a></li>
                    <span class="p-2 text-light d-none d-md-inline-block">|</span>
                    <li class="nav-item"><a class="nav-link" href="#">About Us</a></li>
                    <span class="p-2 text-light d-none d-md-inline-block">|</span>
                    <li class="nav-item"><a class="nav-link" href="contactus.php">Contact Us</a></li>
                    <span class="p-2 text-light d-none d-md-inline-block">|</span>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="javascript:scrollIntoView(document.getElementById('customerportalpanel');)" id="customerportaldropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Customer Portal</a>
                        <div class="dropdown-menu dropdown-menu-right p-3 bg-dark text-white" aria-labelledby="customerportaldropdown">
                            <div class="" id="customerportalpanel" style="min-width:300px; width: 100%;">
                                <div class="py-3 h5 font-weight-light">Secure Customer Portal Login</div>
                                <form>
                                    <div class="input-group pb-2">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="loginemail"><i class="far fa-envelope fa-fw"></i></span>
                                        </div>
                                        <input type="email" class="form-control" placeholder="Email address..." aria-label="Email" aria-describedby="loginemail">
                                    </div>
                                    <div class="input-group pb-2">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="loginpassword"><i class="fas fa-lock fa-fw"></i></span>
                                        </div>
                                        <input type="password" class="form-control" placeholder="Password..." aria-label="Email" aria-describedby="loginpassword">
                                    </div>
                                    <button type="submit" class="btn btn-primary btn-block">Login</button>
                                </form>
                                <div class="small text-muted text-right pt-3"><a href="#">Password Reset</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="#">New User</a></div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

        </nav>

        <div class="container bg-white" style="padding-top: 180px;">

            <div class="row">
                <div class="col-4">
                    <nav id="navbar-scrollspy" class="navbar navbar-light sticky-top" style="top:180px;">
                        <nav class="nav nav-pills flex-column">
                            <a class="nav-link" href="#item-1">Princess &amp; Superhero Dance Parties</a>
                            <a class="nav-link" href="#item-2">Gymnastics Parties</a>
                            <a class="nav-link" href="#item-3">Live, Dream, Dance Parties</a>
                        </nav>
                    </nav>
                </div>
                <div class="col-8">
                    <div class="pt-4">
                        <div class="h1 text-info font-weight-light">Birthday Parties</div>
                        <p>Join us at The Dream Centre for our fantastic, all-inclusive birthday parties for kids! Choose from our selection of Gymnastics and themed Dance parties and let the fun begin! Parties are two hours in length, include a pizza party with juice and snacks, dance or gymnastics classes, decorations, and special activities. Plates, utensils and napkins are also provided. A minimum of seven children is required and no maximum. You bring the cake or cupcakes!</p>
                        <p>We highly recommend connecting with Amanda Domenichetti here in Waterdown, Owner/Operater of “GIMMIE SOME SUGAR – CAKES * COOKIES * AND SWEET TREATS” for all of your special birthday cake needs. </p>

                        <div class="h3 text-primary font-weight-light" id="item-1">Princess &amp; Superhero Dance Parties</div>
                        <ul>
                            <li>2 Hours in length - Princess or Superhero will party with you for the two full hours! Princess or Superhero is dependent on availability</li>
                            <li>80 minute dance class (Ballet/Jazz/Hip Hop done to Disney Princess or Superhero Music)</li>
                            <li>40 minutes for a pizza party, cake, and opening gifts</li>
                            <li>30 minute craft time (make a princess crown)</li>
                            <li>Party décor, plates, utensils, and napkins are provided</li>
                        </ul>
                        <div class="h3 text-primary font-weight-light" id="item-2">Gymnastics Parties</div>
                        <ul>
                            <li>2 Hours in length</li>
                            <li>80 minutes in the gymnastics facility</li>
                            <li>40 minutes for a pizza party, cake, and opening gifts</li>
                            <li>Party décor, plates, utensils, and napkins are provided</li>
                        </ul>
                        <div class="h3 text-primary font-weight-light" id="item-3">Live, Dream, Dance Parties</div>
                        <ul>
                            <li>2 Hours in length</li>
                            <li>80 minutes in the gymnastics facility</li>
                            <li>40 minutes for a pizza party, cake, and opening gifts</li>
                            <li>Party décor, plates, utensils, and napkins are provided</li>
                        </ul>
                        <div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div>
                    </div>
                </div>
            </div>







        </div>

        <div class="container-fluid bg-dark text-white p-4">
            <div class="text-center py-3">
                <div class="d-inline-block">
                    <a href="#" class="btn btn-dark btn-sm">
                        <div><i class="fab fa-twitter fa-2x"></i></div>
                        <div class="text-uppercase small font-weight-light">Twitter</div>
                    </a>
                </div>
                <div class="d-inline-block">
                    <a href="#" class="btn btn-dark btn-sm">
                        <div><i class="fab fa-instagram fa-2x"></i></div>
                        <div class="text-uppercase small font-weight-light">Instagram</div>
                    </a>
                </div>
                <div class="d-inline-block">
                    <a href="#" class="btn btn-dark btn-sm">
                        <div><i class="fab fa-facebook fa-2x"></i></div>
                        <div class="text-uppercase small font-weight-light">Facebook</div>
                    </a>
                </div>
            </div>
            <div class="">
                <div class=" text-center small">
                    <div>&copy; <script>document.write((new Date()).getFullYear());</script> The Dream Centre.  All Rights Reserved.</div>
                </div>
            </div>
        </div>


    </body>
</html>
