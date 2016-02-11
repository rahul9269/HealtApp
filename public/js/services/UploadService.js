angular.module('UploadService',[])
   .factory('fileUpload', ['$http', function ($http) {
    this.uploadFileToUrl = function(file, uploadUrl){

        var fd = new FormData();
        fd.append('file', file);
        $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        })
        .success(function(){
            console.log("ASDASD");
        })
        .error(function(){
         console.log("pqpqpqp");
        });
    }
}]);
