angular.module('ionicApp.controllers', [])

.controller('signupCtrl', function($scope, $state, $rootScope, LoginService, $ionicPopup) {
    $scope.data = {}
 
    $scope.phone = function(data) {
        $state.go('phone')
        console.log('Enter Phone Number')
    }

    $scope.login = function() {
        LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
            $state.go('tab.contacts');
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Wrong User Name or Password!'
            });
        });
    }
})

.controller('phoneCtrl', function($scope, $state) {
    $scope.valid = function(data) {
        $state.go('validation')
        console.log('Validation Page')
    }


})

.controller('validationCtrl', function($scope, $ionicPopup, $state) {
    $scope.signup = function(data) {
        $state.go('register')
        console.log('Register Page')
        var alertPopup = $ionicPopup.alert({
                title: 'Validated',
        template: '<h4 style="text-align: center">Success!</h4>' 
    })

    }
    
})
