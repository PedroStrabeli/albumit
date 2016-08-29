function pageTitle($rootScope, $timeout) {
    return {
        link: function(scope, element) {
            var listener = function(event, toState, toParams, fromState, fromParams) {
                // Default title
                var pageTitle = 'AlbumIt';
                // Title pattern
                if (toState.data && toState.data.pageTitle) title = 'Albumit | ' + toState.data.pageTitle;
                $timeout(function() {
                    element.text(title);
                });
            };
            $rootScope.$on('$stateChangeSuccess', listener);
        }
    }
}


function serverError(){
return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, element, attrs, ctrl) {
          element.on('keydown', function() {
            ctrl.$setValidity('server', true)
          });
        }
    }
}

app.directive('pageTitle', pageTitle)
app.directive('serverError', serverError)