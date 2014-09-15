/**
 * Created by martin on 15.09.2014.
 */
function MyFirstCtrl($scope){
    $scope.myVariable = "Mal was ausprobieren";

    $scope.persons = [
        {name: "hans1", age:18},
        {name: "hans2", age:28},
        {name: "hans3", age:38},
        {name: "hans4", age:48},
        {name: "seppl", age:58},
        {name: "hans6", age:68},
        {name: "hans7", age:78},
        {name: "hans8", age:88},
                     ];

    $scope.getPersonLength = function(){
        return $scope.persons.length;
    };

    $scope.name = "Bitte den Text eingeben!";
    $scope.age = 18;

    $scope.click = function () {
        //alert("hello world")
        $scope.persons.push({name: $scope.name, age: $scope.age})
    };
}
