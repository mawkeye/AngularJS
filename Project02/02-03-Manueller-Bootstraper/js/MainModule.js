var app = angular.module('app', [])
    .run( function( $log ){
        $log.log ("app started");
        // h2 hat eine ID dadurch kann auf das Element zugeegriffen werden
        document.getElementById("preloader").innerHTML = "fertig...";
    })
    ;
