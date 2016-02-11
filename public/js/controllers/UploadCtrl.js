angular.module('UploadCtrl', ['UploadService'])
    .controller('fileModel',function ($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;

            element.bind('change', function(){
                scope.$apply(function(){
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
})

   .controller('myCtrl', function($scope, fileUpload) {
      $scope.uploadFile = function () {
         var file = $scope.myFile;
         console.log('file is ');
         console.dir(file);
         var uploadUrl = "/fileUpload";
         fileUpload.uploadFileToUrl(file, uploadUrl);
      }
   });




    //angular.module('UploadCtrl', ['fileUpload']).controller('myCtrl', function($scope, fileUpload){
    //
    //$scope.uploadFile = function(){
    //    var file = $scope.myFile;
    //    console.log('file is ' );
    //    console.dir(file);
    //    var uploadUrl = "/fileUpload";
    //    fileUpload.uploadFileToUrl(file, uploadUrl);
    //};

//});

//
//
//angular.module('UploadCtrl',[]).
//    factory('fileUpload', ['$http', function ($http) {
//    this.uploadFileToUrl = function(file, uploadUrl){
//
//        var fd = new FormData();
//        fd.append('file', file);
//        $http.post(uploadUrl, fd, {
//            transformRequest: angular.identity,
//            headers: {'Content-Type': undefined}
//        })
//        .success(function(){
//        })
//        .error(function(){
//        });
//    }
//}]);
//
//
//
//






