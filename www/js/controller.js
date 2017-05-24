angular.module('ionicApp.controllers', [])

.controller('signupCtrl', function($scope, $state, $rootScope, LoginService, $ionicPopup) {
    $scope.data = {}
 
    $scope.logIn = function() {
        LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
            $state.go('tabs.contacts')
            console.log('Login Successfully')
        })
            .error(function(data) {
                console.log('Login Failed')
                var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: '<h4 style="text-align: center">Please Try Again!!!</h4>'            
        })
      })
   }
     $scope.phone = function(data) {
        $state.go('phone')
        console.log('Enter Phone Number')
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
