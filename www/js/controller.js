angular.module('ionicApp.controllers', [])

.controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state) {
    $scope.data = {}
 
    $scope.phone = function(data) {
        $state.go('phone')
        console.log('Enter Phone Number')
    }

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
})

.controller('ContactsCtrl', function($scope, $ionicModal) {
    $scope.contacts = []

    $ionicModal.fromTemplateUrl('templates/modal.html', {
      scope: $scope
    })
    
    .then(function(modal) {
      $scope.modal = modal;    
    })
    
    $scope.createContact = function(u) {        
      $scope.contacts.push({ name: u.firstName + ' ' + u.lastName });
      $scope.modal.hide();
    }

    $scope.removeItem = function (index) {
          console.log('DELETED');
          $scope.contacts.splice(index, 1);
    }

})

.controller('phoneCtrl', function($scope, $ionicModal, $state) {
    $scope.signup = function(data) {
        $state.go('register')
        console.log('Register Page')
    }

})

.controller('signupCtrl', function($scope, $ionicModal) {
    
})