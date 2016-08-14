angular.module('controllers', ['angular-md5',])
	.controller('MainCtrl', ['$scope', '$http', 'md5', '$state', function($scope, $http, md5, $state) {

		$scope.login = function(){
			if($scope.form.username.$valid == true && $scope.form.password.$valid == true){
				$scope.passEncriptado = md5.createHash($scope.pass || '');
				console.log($scope.passEncriptado);

				$http.get("http://test.localhost.com/app/login/service.php?username="+$scope.user+
				"&password="+$scope.passEncriptado)
					.success(function(data, status) {
						console.log(data, status);
						$scope.message = data.message;

						if (data.success == true){
							$state.go('app');
						}
					})
					.error(function(e){
						console.log(e);
						$state.go('app');
					});
			}
			else{
				console.log('Faltan los campos de entrada');
			}
		}

	}])

	.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {

		$scope.mensaje = 'Mundo';

		$scope.getObjects = function(minor_platet){
			console.log('objeto de busqueda', minor_platet);
			//   var query = {
			//     "e":{
			//       "$lt": minor_platet.eccentrity
			//      },
			//      "i":{
			//         "$lt": minor_platet.inclination
			//      },
			//      "a":{
			//         "$lt": minor_platet.axis
			//      }
			//  };
			var e = minor_platet.eccentricity;
			var i = minor_platet.inclination;
			var a = minor_platet.axis;
			var limit = minor_platet.limit;

			$http.get("http://www.asterank.com/api/mpc?query={%22e%22:{%22$lt%22:"+e+"},%22i%22:{%22$lt%22:"+i+"},%22a%22:{%22$lt%22:"+a+"}}&limit="+limit)
				.success(function(data, status){
					console.log(data);
					$scope.items = data;
					$scope.objsFound = data.length;
				})
				.error(function(e){
					console.log(e);
				});
		}

	}]);
