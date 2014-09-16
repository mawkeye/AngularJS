// werte in [] sind abhängige Module
var app = angular.module('app', ['app.model'])
        // mitgabe der Varibalen
        .run( function( $log, Model){
            $log.log ("app started");
            Model.setValue( "das ist ein test" );

            // h2 hat eine ID dadurch kann auf das Element zugeegriffen werden
            document.getElementById("preloader").innerHTML = Model.getSampleData();
            // setzen der Variablen mit id und wert
            document.getElementById("headline").innerHTML = Model.getValue() + " # " + Model.getConstant();
        })
    ;
