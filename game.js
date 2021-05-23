angular.module('myApp',[]).controller('myCtrl',function($scope){

          
       $scope.random_value_1 = Math.floor(Math.random() * 2); //Lucky number that you get
       $scope.random_value_2 = Math.floor(Math.random() * 2); //Number which is matched with lucky number  to determine victory
                                                            
       if($scope.random_value_1==$scope.random_value_2)
       {
         $scope.msg="Congrats,Its a match! You Won";
       }
       else
       {
         $scope.msg="Sorry!Better Luck next time";
       }

  });