var values = angular.module('values', [])
        //Wertdefinition über id und wert (h1 in index.html)
        .value("headline", "angularJS")
        // Definition einer Konstanten, einmal definiert nicht merh überschreibbar!!!!
        .constant("myConstant", "...rocks")
    ;

// werte in [] sind abhängige Module
var app = angular.module('app', ['values'])
        // mitgabe der Varibalen
        .run( function( $log, headline, myConstant){
            $log.log ("app started");
            // h2 hat eine ID dadurch kann auf das Element zugeegriffen werden
            document.getElementById("preloader").innerHTML = "fertig...";
            // setzen der Variablen mit id und wert
            document.getElementById("headline").innerHTML = headline + " # " + myConstant;
        })
    ;
