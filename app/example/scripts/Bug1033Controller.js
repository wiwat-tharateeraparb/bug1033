angular
  .module('example')
  .controller('Bug1033Controller', function($scope, supersonic) {
    $scope.navbarTitle = "Bug1033";
    
    $scope.post = function() {
        supersonic.logger.log("Post called");
        var message = {
            action: "alert",
            text: "alert message"
        };
        window.postMessage(message, "*");
    };
    
    window.addEventListener("message", function (event) {
        if (event.data.text) {
            supersonic.logger.log("Message received: " + event.data.text);
        }
    });
  });
