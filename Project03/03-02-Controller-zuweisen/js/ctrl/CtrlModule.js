function Controller ()
{
    console.log ("ctrl");
}
var p = Controller.prototype;

p.onClick = function ()
{

}
// abhängigkeit in mainModel mit angeben sonst kein Controller!!!
var ctrl = angular.module('app.ctrl', [])
        .controller ( 'Controller', Controller )
    ;
