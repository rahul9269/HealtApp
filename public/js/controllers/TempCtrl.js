/**
 * Created by Rahul on 2/8/2016.
 */

angular.module('TempCtrl',['PatientService']).controller('TempController', function($scope,DataSource) {

    SOURCE_FILE = " LMR4TEST.xml";


    xmlTransform = function(data) {
        console.log("transform data");
        var x2js = new X2JS();
        var json = x2js.xml_str2json( data );
        $scope.jsone =json.ClinicalDocument.recordTarget;
        return json.ClinicalDocument.recordTarget;

    };

    setData = function(data) {
        $scope.dataSet = data;
        console.log($scope.dataSet);
    };

    DataSource.get(SOURCE_FILE,setData,xmlTransform);

});