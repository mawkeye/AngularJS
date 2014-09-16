/**
 * Created by Martin on 15.09.2014.
 */
var intervalID;

intervalID = setInterval( function(){
    // überprüfe ob der document.readyState Loaded ode Complete ist
    if(/loaded|complete/i.test(document.readyState)){
        //console.log ("document ready");
        angular.bootstrap( document, ['app']);
        // clearintervall, damit ich keine endlosschleife bekomme ?!
        clearInterval(intervalID);
    }
},100);