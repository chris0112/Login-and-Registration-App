angular.module('ionicApp.controllers', [])

.controller('LoginCtrl', function($scope, $state) {
    $scope.data = {}
 
    $scope.phone = function(data) {
        $state.go('phone')
        console.log('Enter Phone Number')
    }

    /*
    <Server code here....>
    success: function(user) {
        console.log(user);
        alert("Logged in!")
    },
    error:function(user, error) {
        alert("Invalid Username or Password!");
    }*/

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

.controller('signupCtrl', function($scope) {
       /*
        <Server code here....>
        var user 
        user.set("username", $scope.data.username);
        user.set("firstname", $scope.data.firstname);
        user.set("lastname", $scope.data.lastname);
        user.set("password", $scope.data.password);

        user.register(null, {
            success: function(user) {
                alert("success!");
            },
            error:function(user, error) {
                alert("Error: " + error.code + "" + error.message);
            }
        })*/
})
