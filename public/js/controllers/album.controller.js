var album = function($scope, $http, $window, $rootScope, $auth){
	var getPhotos=function(){
		$http.get('/albumit')
			.then(function(response){
				$scope.album=response.data;
			})
			.catch(function(err){
				console.log(err);
			})
		}();

	$scope.deletePhoto=function(id){
		$http.get('albumit/delete'+id)
		.then(function(response){
			console.log(response.data)
			alert("Foto removida com sucesso.")
			$http.get('/albumit')
			.then(function(response){
				$scope.album=response.data;
			})
			.catch(function(err){
				console.log(err);
			})
		})
		.catch(function(err){
			console.log(err);
		})
	}
}

app.controller('albumCtrl',album)