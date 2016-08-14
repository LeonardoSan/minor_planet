angular.module('directives', [])
.directive('minorPlanet', function() {
	return {
		restrict : 'E',
		template : "<table><thead><tr><td>Rms</td><td>Epoch</td><td>Readable Des</td></tr></thead><tbody><tr ng-repeat='item in items'><td>{{item.rms}}</td><td>{{item.epoch}}</td><td>{{item.readable_des}}</td></tr></tbody></table>",
		scope: true
	}
});
