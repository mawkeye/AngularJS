var Model = function( $log, headline, myConstant)
{
    $log.log("new Instance of Model");

    return{
        getSampleData : function () {
            return "Hello World";
        }
        , getValue : function() {
            return headline;
        }
        , setValue : function( val ){
            headline = val;
        }
        , getConstant : function () {
            return myConstant;
        }
    }
}

var values = angular.module('app.model', [])
        //Wertdefinition über id und wert (h1 in index.html)
        .value("headline", "Modelwerte setzen")
        // Definition einer Konstanten, einmal definiert nicht merh überschreibbar!!!!
        .constant("myConstant", "KONSTANTE")

        //.factory("Model", Model); // Singelton (modelle)
        service ("Model", Model); //Daten holen , Logik, Businesslogic
;
