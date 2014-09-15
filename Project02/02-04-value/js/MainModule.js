var app = angular.module('app', [])
        //Wertdefinition über id und wert (h1 in index.html)
    .value("headline", "Überschrift")
        // mitgabe der Varibalen
    .run( function( $log, headline ){
        $log.log ("app started");
        // h2 hat eine ID dadurch kann auf das Element zugeegriffen werden
        document.getElementById("preloader").innerHTML = "fertig...";
            // setzen der Variablen mit id und wert
        document.getElementById("headline").innerHTML = headline;
    })
    ;
