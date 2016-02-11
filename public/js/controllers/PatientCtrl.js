/**
 * Created by Rahul on 2/9/2016.
 */


angular.module('PatientCtrl', ['PatientService']).controller('PatientController', function($scope,$resource,DataSource) {

    var Patient = $resource('/api/patient');
    Patient.query(function (results)
    {
      $scope.patients = results;

    });
    $scope.patients = [];
    $scope.createData = function(){

        var patient = new Patient();
        console.log($scope.jsone);
        patient.name = $scope.jsone.patientRole.patient.name.given;
        patient.info = $scope.jsone;
        patient.$save(function(result){

            $scope.patients.push(result);
        });
        $scope.patientName = '';

    }

});