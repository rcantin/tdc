<!doctype html>
<!--<html lang="en" ng-app="myApp" ng-controller="MainCtrl">-->
<html lang="en">
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
    <body class="bg-light">

        <div class="navbar sticky-top bg-dark text-whte text-center">
            <img src="img/tdclogo-dancers.png" class="mx-auto" style="max-width: 280px;">
        </div>

        <nav class="navbar pt-0 navbar-expand-sm sticky-top navbar-dark bg-dark d-block text-center">
            <div class="navbar-brand">
                <div class="pb-2">
                    <img src="img/tdclogo-text.png" class="" style="width: 280px;">
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

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="programsschedules" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Programs &amp; Schedules
                        </a>
                        <div class="dropdown-menu" aria-labelledby="programsschedules">
                            <a class="dropdown-item" href="#">Birthday Parties</a>
                            <a class="dropdown-item" href="#">Before &amp; After School Care</a>
                            <a class="dropdown-item" href="#">March Break &amp; PA Day Camps</a>
                            <a class="dropdown-item" href="#">Summer Camps</a>
                            <a class="dropdown-item" href="#">Summer Classes</a>
                            <a class="dropdown-item" href="#">Sweet Dreamers</a>
                            <a class="dropdown-item" href="#">Dance - Recreational Programs</a>
                            <a class="dropdown-item" href="#">Dance - Competitive Schedule</a>
                            <a class="dropdown-item" href="#">Gymnastics</a>
                            <a class="dropdown-item" href="#">Martial Arts</a>
                            <a class="dropdown-item" href="#">Triple Threat/Musical Theatre</a>
                            <a class="dropdown-item" href="#">Adult Healthy Lifestyles Initiative</a>
                            <a class="dropdown-item" href="#">Full Schedule</a>
                        </div>
                    </li>
                    <span class="p-2 text-light d-none d-md-inline-block">|</span>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="aboutus" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        About Us
                        </a>
                        <div class="dropdown-menu" aria-labelledby="aboutus">
                            <a class="dropdown-item" href="#">Who Are We?</a>
                            <a class="dropdown-item" href="#">Faculty</a>
                            <a class="dropdown-item" href="#">In the Press</a>
                            <a class="dropdown-item" href="#">Awards</a>
                            <a class="dropdown-item" href="#">Contact Us</a>
                            <a class="dropdown-item" href="#">Photo Galleries</a>
                        </div>
                    </li>

<!--
                    <li class="nav-item"><a class="nav-link" href="#">About Us</a></li>
-->
                    <span class="p-2 text-light d-none d-md-inline-block">|</span>
<!--
                    <li class="nav-item"><a class="nav-link" href="#">Contact Us</a></li>
                    <span class="p-2 text-light d-none d-md-inline-block">|</span>
-->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="javascript:scrollIntoView(document.getElementById('customerportalpanel');)" id="customerportaldropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Customer Portal</a>
                        <div class="dropdown-menu dropdown-menu-right p-3 " aria-labelledby="customerportaldropdown">
                            <div class="" id="customerportalpanel" style="min-width:300px; width: 100%;">
                                <div class="py-3 h5 font-weight-light text-white">Secure Customer Portal Login</div>
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
                                <div class="text-muted text-right pt-3"><a href="#">Password Reset</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="#">New User</a></div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
<!--
            <div class="row p-3 bg-dark">
                <div class="col-12 bg-primary text-white p-3">
                    <form class="form-inline">
                        <div class="h5 pr-3">Secure Customer Portal Login</div>
                        <div class="input-group mb-2 mr-sm-2">
                            <div class="input-group-prepend">
                                <div class="input-group-text"><i class="fas fa-envelope"></i></div>
                            </div>
                            <input type="teemailxt" class="form-control" id="portalemail" placeholder="Email address...">
                        </div>
                        <div class="input-group mb-2 mr-sm-2">
                            <div class="input-group-prepend">
                                <div class="input-group-text"><i class="fas fa-lock"></i></div>
                            </div>
                            <input type="password" class="form-control" id="portalpassword" placeholder="Email address...">
                        </div>
                        <button class="btn btn-light mb-2">Login</button>
                    </form>
                </div>
            </div>
-->
        </nav>

        <div class="container bg-white">


            <div class="row text-center py-5">
<!--
                <div class="col-12 p-3 h3">
                    <span class="bg-primary text-white p-2">T</span>
                    <span class="bg-primary text-white p-2">E</span>
                    <span class="bg-primary text-white p-2">A</span>
                    <span class="bg-primary text-white p-2">M</span>
                    <span class="bg-primary text-white p-2">W</span>
                    <span class="bg-primary text-white p-2">O</span>
                    <span class="bg-primary text-white p-2">R</span>
                    <span class="bg-primary text-white p-2">K</span>
                    <span class="bg-dark text-white p-2 font-weight-light">makes</span>
                    <span class="bg-dark text-white p-2 font-weight-light">the</span>
                    <span class="bg-secondary text-white p-2">D</span>
                    <span class="bg-secondary text-white p-2">R</span>
                    <span class="bg-secondary text-white p-2">E</span>
                    <span class="bg-secondary text-white p-2">A</span>
                    <span class="bg-secondary text-white p-2">M</span>
                    <span class="bg-info text-white p-2">W</span>
                    <span class="bg-info text-white p-2">O</span>
                    <span class="bg-info text-white p-2">R</span>
                    <span class="bg-info text-white p-2">K</span>
                </div>
-->
                <div class="col-12 h2 text-spaced m-0">
                    <span class="font-weight-bold text-primary text-uppercase">Teamwork </span>
                    <span class="font-weight-light text-dark">makes the </span>
                    <span class="font-weight-bold text-secondary text-uppercase">dream</span>&nbsp;<span class="font-weight-bold text-info text-uppercase">work</span>
                    <div class="row pt-0">
                        <div class="col-4 p-1">
                            <div class="bg-primary" style="height: 3px;"></div>
                        </div>
                        <div class="col-4 p-1">
                            <div class="bg-secondary" style="height: 3px;"></div>
                        </div>
                        <div class="col-4 p-1">
                            <div class="bg-info" style="height: 3px;"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="text-center d-none">

<!--
                <div class="text-center m-3 d-inline-block">
                    <div class="bg-primary text-white text-uppercase rounded-circle p-3" style="height: 150px; width: 150px;">
                        <div class="p-2"><i class="far fa-star fa-2x"></i></div>
                        <div class="font-weight-light">Live Dream</div>
                        <div class="h3 font-weight-light">Dance</div>
                    </div>
                </div>
                <div class="text-center m-3 d-inline-block">
                    <div class="bg-secondary text-white text-uppercase rounded-circle p-3" style="height: 150px; width: 150px;">
                        <div class="p-2"><i class="far fa-comment fa-2x"></i></div>
                        <div class="font-weight-light">Live Dream</div>
                        <div class="h3 font-weight-light">Gymnastics</div>
                    </div>
                </div>
                <div class="text-center m-3 d-inline-block">
                    <div class="bg-info text-white text-uppercase rounded-circle p-3" style="height: 150px; width: 150px;">
                        <div class="p-2"><i class="far fa-heart fa-2x"></i></div>
                        <div class="font-weight-light">Live Dream</div>
                        <div class="h3 font-weight-light">Martial Arts</div>
                    </div>
                </div>
-->


<!--
                <div class="col-12">
                    <div class="row p-0">
                        <div class="col-4 p-1">
                            <div class="bg-primary" style="height: 2px;"></div>
                        </div>
                        <div class="col-4 p-1">
                            <div class="bg-secondary" style="height: 2px;"></div>
                        </div>
                        <div class="col-4 p-1">
                            <div class="bg-info" style="height: 2px;"></div>
                        </div>
                    </div>
                </div>
                <div class="col-12 h3 text-spaced py-4">
                    <span class="font-weight-bold text-primary text-uppercase">Teamwork </span>
                    <span class="font-weight-light text-white">makes the </span>
                    <span class="font-weight-bold text-secondary text-uppercase">dream </span>
                    <span class="font-weight-bold text-info text-uppercase">work</span>
                </div>
-->
<!--
                <div class="col-12 p-0">
                    <img src="img/IMG_1210.jpg" class="img-fluid">
                </div>
-->
            </div>

            <div class="row pt-3">
                <div class="col-12 col-lg-6">
                    <div class="mb-5">
                        <div class="h2 text-primary">
                            <span class="font-weight-light">Live Dream </span>
                            <span class="font-weight-bold text-uppercase">Dance</span>
                        </div>
<!--                        <div class="pb-3"><img src="img/IMG_1437.jpg" class="img-fluid"></div>-->
                        <div class="">
                            <p class="text-justify">Founded in 2010 by Sarah Sordoni, LIVE DREAM DANCE has quickly become recognized as one of the top studios in the area. Known for our world class instruction in a positive, fun-filled, family environment, we believe that quality communication is key to bringing out the best in dancers and guiding them towards achieving their goals.</p>
                            <p class="text-justify">Alongside friends and the leadership of our dance instructors, dancers will learn the foundational skills in; Ballet, Jazz, Tap, Hip Hop, Lyrical, Acro, and more. More so, each dancer will know what it feels like to succeed and be confident in dancing, making friends, and mastering skills.</p>
                            <div>
<!--                                <div class="">Learn more...</div>-->
                                <a href="#" class="btn btn-primary">Recreational Dance <i class="fa fa-caret-right fa-lg ml-2"></i></a>
                                <a href="#" class="btn btn-primary">Competitive Dance <i class="fa fa-caret-right fa-lg ml-2"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="mb-5">
                        <div class="h2 text-secondary">
                            <span class="font-weight-light">Live Dream </span>
                            <span class="font-weight-bold text-uppercase">Gymnastics</span>
                        </div>
                        <div class="">
                            <p class="text-justify">We strive to develop habits that promote sharing, teamwork and friendship. Developmentally appropriate gymnastics fundamentals and equipment size ensures safety and encourages children to learn at their own pace. Alongside friends and the leadership of The Dream Centres’ coaches, your child will learn the foundational skills in gymnastics: Beam, bars, vault, trampoline, floor and much more. More so, each child will experience what it feels like to succeed and be confident in playing, making friends, and mastering skills.</p>
                            <div>
<!--                                <div class="">Learn more...</div>-->
                                <a href="#" class="btn btn-secondary">Gymnastics Program <i class="fa fa-caret-right fa-lg ml-2"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="mb-5">
                        <div class="h2 text-info">
                            <span class="font-weight-light">Live Dream </span>
                            <span class="font-weight-bold text-uppercase">Martial Arts</span>
                        </div>
                        <div class="">
                            <p class="text-justify">Our program is designed to encourage children to excel to the best of their abilities in a fun, positive atmosphere. We introduce concepts of respect, discipline, focus and control through our martial arts program. Our classes are geared to increase balance, strength, flexibility, and co-ordination. All classes are taught by qualified and caring black belt instructors who will help your child learn to set goals and achieve them with confidence.</p>
                            <div>
<!--                                <div class="">Learn more...</div>-->
                                <a href="#" class="btn btn-info">Martial Arts Program <i class="fa fa-caret-right fa-lg ml-2"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col offset-lg-1">

                    <div class="row">

                        <div class="col-12 mb-5">
                            <div class="">
                                <div class="h2 text-dark">
                                    <span class="font-weight-light">Upcoming </span>
                                    <span class="font-weight-bold text-uppercase">Events</span>
                                </div>
                                <hr class="my-2">
                                <div><a href="#">Registration now open for summer camps</a></div>
                                <hr class="my-2">
                                <div><a href="#">Oh Canada Ribfest - June 30th to July 3rd</a></div>
                                <hr class="my-2">
                                <div><a href="#">Competitive Dance Intensive - July 24th to 28th</a></div>
                                <hr class="my-2">
                                <div><a href="#">Classes begin Monday, September 11</a></div>
                                <hr class="my-2">
                                <div><a href="#" class="btn btn-outline-dark btn-sm">All Events <i class="fa fa-caret-right fa-lg ml-2"></i></a></div>
                            </div>
                        </div>
<!--
                        <div class="col-12 mb-5">
                            <div><img src="img/wordcloud01.png" class="img-fluid"></div>
                        </div>
-->
                        <div class="col-12 mb-5">
                            <div class="">
                                <div class="h2 text-dark">
                                    <span class="font-weight-bold text-uppercase">Send </span>
                                    <span class="font-weight-light">Us a </span>
                                    <span class="font-weight-bold text-uppercase">Message</span>
                                </div>
                                <form method="post" action="contactsend.php" id="contactForm">
                                    <div class="form-group">
                                        <input class="form-control" required type="text" name="contactname" id="contactname" placeholder="Your name...">
                                    </div>
                                    <div class="form-group">
                                        <input class="form-control" required type="email" name="contactemail" id="contactemail" placeholder="Your email address...">
                                    </div>
                                    <div class="form-group">
                                        <input class="form-control" required type="tel" name="contactphone" id="contactphone" placeholder="Your phone number...">
                                    </div>
                                    <div class="form-group">
                                        <textarea class="form-control" required rows="4" name="contactmessage" id="contactmessage" placeholder="Your message..."></textarea>
                                    </div>
                                    <div><button type="submit" class="btn btn-outline-dark btn-sm">Send Message <i class="fa fa-caret-right fa-lg ml-2"></i></button></div>
                                    <div class="d-none"><input type="text" name="documentlocation" id="documentlocation"></div>
                                    <div class="d-none"><input type="text" name="website" id="website"></div>
                                </form>
                            </div>
                        </div>

                    </div>

                    <div class="mb-5">
                    </div>



<!--
                    <div class="mb-5">
                        <div class="">
                            <div class="h2 text-dark">
                                <span class="font-weight-light">Find us </span>
                                <span class="font-weight-bold text-uppercase">Online</span>
                            </div>
                            <div class="">
                                <div class="d-inline-block">
                                    <a href="#" class="btn btn-link btn-lg">
                                        <div><i class="fab fa-twitter fa-lg"></i></div>
                                        <div class="text-uppercase small font-weight-light">Twitter</div>
                                    </a>
                                </div>
                                <div class="d-inline-block">
                                    <a href="#" class="btn btn-link btn-lg">
                                        <div><i class="fab fa-instagram fa-lg"></i></div>
                                        <div class="text-uppercase small font-weight-light">Instagram</div>
                                    </a>
                                </div>
                                <div class="d-inline-block">
                                    <a href="#" class="btn btn-link btn-lg">
                                        <div><i class="fab fa-facebook fa-lg"></i></div>
                                        <div class="text-uppercase small font-weight-light">Facebook</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
-->
                </div>
            </div>

            <div class="row pt-3">
                <div class="col-12">
                        <div class="row">
                            <div class="col-12 h2 text-dark pb-3">
                                <span class="font-weight-bold text-uppercase">Flamborough Review </span>
                                <span class="font-weight-light">Reader's Choice </span>
                                <span class="font-weight-bold text-uppercase">Awards</span>
                            </div>
                            <div class="col-12 col-md-6 small pb-4">
                                <div class="border-bottom border-primary text-primary h4 font-weight-bold">2016</div>
                                <div class="d-inline-block bg-light py-1 px-2 border m-1">
                                    <div class="">Diamond Winner</div>
                                    <div class="font-weight-light">Best Recreational Facility</div>
                                </div>
                                <div class="d-inline-block bg-light py-1 px-2 border m-1">
                                    <div class="">Diamond Winner</div>
                                    <div class="font-weight-light">Best Dance Studio</div>
                                </div>
                                <div class="d-inline-block bg-light py-1 px-2 border m-1">
                                    <div class="">Diamond Winner</div>
                                    <div class="font-weight-light">Best Dance Instructor - Sarah Sordoni, Mike Glenney</div>
                                </div>
                                <div class="d-inline-block bg-light py-1 px-2 border m-1">
                                    <div class="">Diamond Winner</div>
                                    <div class="font-weight-light">Best Fitness Instructor -  Lianne Wysocki</div>
                                </div>
                                <div class="d-inline-block bg-light py-1 px-2 border m-1">
                                    <div class="">Diamond Winner</div>
                                    <div class="font-weight-light">Best Music Instructor</div>
                                </div>
                                <div class="d-inline-block bg-light py-1 px-2 border m-1">
                                    <div class="">Diamond Winner</div>
                                    <div class="font-weight-light">Best Music Instruction</div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 small pb-4">
                                <div class="border-bottom border-primary text-primary h4 font-weight-bold">2015</div>
                                <div class="d-inline-block bg-light py-1 px-2 border m-1">
                                    <div class="">Diamond Winner</div>
                                    <div class="font-weight-light">Best Recreational Facility</div>
                                </div>
                                <div class="d-inline-block bg-light py-1 px-2 border m-1">
                                    <div class="">Platinum Winner</div>
                                    <div class="font-weight-light">Best Dance Studio</div>
                                </div>
                                <div class="d-inline-block bg-light py-1 px-2 border m-1">
                                    <div class="">Platinum Winner</div>
                                    <div class="font-weight-light">Best Dance Instructor - Miss Sarah Sordoni</div>
                                </div>
                                <div class="d-inline-block bg-light py-1 px-2 border m-1">
                                    <div class="">Gold Winner</div>
                                    <div class="font-weight-light">Best Dance Instructor - Mike Glenney</div>
                                </div>
                                <div class="d-inline-block bg-light py-1 px-2 border m-1">
                                    <div class="">Diamond Winner</div>
                                    <div class="font-weight-light">Best Fitness Instructor - Lianne Wysocki</div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>

            <div class="row">
                <div class="col-12 p-0">
                    <img src="img/IMG_1465.jpg" class="img-fluid">
                </div>
            </div>

        </div>

        <div class="container-fluid bg-dark text-white p-4">

            <div class="text-center small">
                <div>The Dream Centre</div>
                <div>70 Innovation Drive, Waterdown ON L9H 7P3</div>
                <div>Tel: 905 690-9022 | Fax: 905 690-8903</div>
            </div>

            <div class="text-center py-4">
                <div class="d-inline-block">
                    <a href="#" class="btn btn-dark btn-sm">
                        <div><i class="fab fa-youtube fa-2x"></i></div>
                        <div class="text-uppercase small font-weight-light">YouTube</div>
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
                <div class=" text-center small text-muted">
                    <div>&copy; <script>document.write((new Date()).getFullYear());</script> The Dream Centre.  All Rights Reserved.</div>
                </div>
            </div>
        </div>


    </body>
</html>
